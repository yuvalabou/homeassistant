"""Custom integration to integrate Anova Nano with Home Assistant.

For more details about this integration, please refer to
https://github.com/mcolyer/home-assistant-anova-nano
"""

from __future__ import annotations

import logging

from homeassistant.components.bluetooth import BluetoothCallbackMatcher
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform, CONF_ADDRESS
from homeassistant.core import HomeAssistant
from homeassistant.components import bluetooth
from .const import DOMAIN
from .coordinator import AnovaNanoDataUpdateCoordinator

PLATFORMS: list[Platform] = [
    Platform.SENSOR,
    Platform.BINARY_SENSOR,
    Platform.SWITCH,
    Platform.NUMBER,
]

_LOGGER = logging.getLogger(__name__)


# https://developers.home-assistant.io/docs/config_entries_index/#setting-up-an-entry
async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""
    hass.data.setdefault(DOMAIN, {})

    coordinator_ = hass.data[DOMAIN][entry.entry_id] = AnovaNanoDataUpdateCoordinator(
        hass=hass,
        logger=_LOGGER,
        entry=entry,
    )

    entry.async_on_unload(
        bluetooth.async_register_callback(
            hass,
            coordinator_.async_discovered_device,
            BluetoothCallbackMatcher(address=entry.data[CONF_ADDRESS]),
            bluetooth.BluetoothScanningMode.ACTIVE,
        )
    )

    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    entry.async_on_unload(entry.add_update_listener(async_reload_entry))

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Handle removal of an entry."""
    coordinator_: AnovaNanoDataUpdateCoordinator = hass.data[DOMAIN][entry.entry_id]
    await coordinator_.disconnect()

    if unloaded := await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        hass.data[DOMAIN].pop(entry.entry_id)
    return unloaded


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload config entry."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)
