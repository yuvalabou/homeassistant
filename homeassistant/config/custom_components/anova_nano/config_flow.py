"""Adds config flow for Anova Nano."""

from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.components.bluetooth import BluetoothServiceInfoBleak
from homeassistant.components import bluetooth
from homeassistant.const import CONF_ADDRESS
from homeassistant.core import callback
from homeassistant.data_entry_flow import AbortFlow, FlowResult
from pyanova_nano import PyAnova

from .const import DOMAIN, SERVICE_UUID


def format_unique_id(address: str) -> str:
    """Format the unique ID."""
    return address


def name_from_discovery(advertisement: BluetoothServiceInfoBleak) -> str:
    """Get the name from the discovery advertisement."""
    # TODO: Get a name - somehow?
    return advertisement.name


class AnovaNanoFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for AnovaNano."""

    VERSION = 1

    def __init__(self) -> None:
        """Initialize the config flow."""
        # self._discovered_adv: SwitchBotAdvertisement | None = None
        self._discovered_advs: dict[str, BluetoothServiceInfoBleak] = {}

    @callback
    def _async_discover_devices(self) -> None:
        current_addresses = self._async_current_ids()
        for connectable in (True, False):
            for discovery_info in bluetooth.async_discovered_service_info(
                self.hass, connectable
            ):
                address = discovery_info.address
                if (
                    format_unique_id(address) in current_addresses
                    or address in self._discovered_advs
                ):
                    continue

                # Skip anything without our service UUID.
                if SERVICE_UUID not in discovery_info.service_uuids:
                    continue

                # TODO: Filter for model or make.
                self._discovered_advs[address] = discovery_info

        if not self._discovered_advs:
            raise AbortFlow("no_devices_found")

    async def async_step_confirm(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Confirm a single device."""
        assert self._discovered_adv is not None
        try:
            await self._test_connection(self._discovered_adv.address)
        except Exception:
            raise AbortFlow(reason="failed_connection")

        if user_input is not None:
            return await self._async_create_entry_from_discovery(user_input)

        self._set_confirm_only()
        return self.async_show_form(
            step_id="confirm",
            data_schema=vol.Schema({}),
            description_placeholders={
                "name": name_from_discovery(self._discovered_adv)
            },
        )

    async def _test_connection(self, address):
        """Test the connection to the device."""
        device = bluetooth.async_ble_device_from_address(
            self.hass, address=address.upper(), connectable=True
        )
        client = PyAnova(self.hass.loop, device=device)
        async with client:
            await client.get_sensor_values()

    async def async_step_user(
        self,
        user_input: dict | None = None,
    ) -> FlowResult:
        """Handle a flow initialized by the user."""
        _errors = {}
        if user_input is not None:
            device_adv = self._discovered_advs[user_input[CONF_ADDRESS]]
            await self._async_set_device(device_adv)
            return await self._async_create_entry_from_discovery(user_input)

        self._async_discover_devices()

        if len(self._discovered_advs) == 1:
            device_adv = list(self._discovered_advs.values())[0]
            await self._async_set_device(device_adv)
            return await self.async_step_confirm()

        form = self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_ADDRESS): vol.In(
                        {
                            address: device.address
                            for address, device in self._discovered_advs.items()
                        }
                    ),
                }
            ),
            errors={},
        )
        return form

    async def _async_set_device(self, discoverInfo: BluetoothServiceInfoBleak):
        self._discovered_adv = discoverInfo
        address = discoverInfo.address
        await self.async_set_unique_id(format_unique_id(address))
        self._abort_if_unique_id_configured()

    async def _async_create_entry_from_discovery(
        self, user_input: dict[str, Any]
    ) -> FlowResult:
        """Create an entry from a discovery."""
        assert self._discovered_adv is not None
        discovery = self._discovered_adv
        name = discovery.address
        return self.async_create_entry(
            title=name,
            data={
                **user_input,
                CONF_ADDRESS: discovery.address,
            },
        )
