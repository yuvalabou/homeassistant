"""Switch platform for Anova Nano."""

from __future__ import annotations

import asyncio
from dataclasses import dataclass

from homeassistant.components.switch import SwitchEntity, SwitchEntityDescription
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from custom_components.anova_nano import AnovaNanoDataUpdateCoordinator

from .const import DOMAIN
from .entity import AnovaNanoDescriptionEntity


@dataclass(frozen=True)
class AnovaNanoSwitchEntityDescription(SwitchEntityDescription):
    """Describes Anova Nano switch entity."""


SWITCH_ENTITY_DESCRIPTIONS = [
    AnovaNanoSwitchEntityDescription(
        key="cooking",
        name="Cooking",
        icon="mdi:power",
    ),
]


class AnovaNanoSwitch(AnovaNanoDescriptionEntity, SwitchEntity):
    """Representation of a switch that uses DataUpdateCoordinator."""

    def __init__(
        self,
        coordinator: AnovaNanoDataUpdateCoordinator,
        entity_description: SwitchEntityDescription,
    ):
        """Initialize the switch."""
        super().__init__(coordinator, description=entity_description)
        self._attr_name = "Cooking"
        self._attr_unique_id = "switch"
        self.entity_description = entity_description
        self.coordinator: AnovaNanoDataUpdateCoordinator = coordinator

    @property
    def is_on(self):
        """Return true if the switch is on."""
        # TODO: There must be a better way to know the device is running.
        if not self.coordinator.status:
            return False
        return self.coordinator.status.motor_speed != 0

    async def async_turn_on(self, **kwargs):
        """Turn the switch on."""
        await self.coordinator.turn_on()
        # Let the motor spin up.
        await asyncio.sleep(1.0)
        await self.coordinator.async_request_refresh()

    async def async_turn_off(self, **kwargs):
        """Turn the switch off."""
        await self.coordinator.turn_off()
        # Let the motor stop as this is our only indication if we're cooking.
        await asyncio.sleep(1.0)
        await self.coordinator.async_request_refresh()


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_devices: AddEntitiesCallback
):
    """Set up the sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_devices(
        AnovaNanoSwitch(
            coordinator=coordinator,
            entity_description=entity_description,
        )
        for entity_description in SWITCH_ENTITY_DESCRIPTIONS
    )
