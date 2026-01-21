"""Config flow for Home Maintenance integration."""

import secrets
from typing import Any

from homeassistant.config_entries import (
    CONN_CLASS_LOCAL_POLL,
    ConfigEntry,
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlow,
)
from homeassistant.core import callback

from .const import (
    CONFIG_STEP_USER_DATA_SCHEMA,
    DOMAIN,
    NAME,
    get_options_schema,
)


class HomeMaintenanceConfigFlow(ConfigFlow, domain=DOMAIN):
    """Config flow for Home Maintenenance."""

    VERSION = "1.1.0"
    CONNECTION_CLASS = CONN_CLASS_LOCAL_POLL

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        """Handle a flow initialized by the user."""
        # Only allow a single instance
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        if user_input is None:
            return self.async_show_form(
                step_id="user", data_schema=CONFIG_STEP_USER_DATA_SCHEMA
            )

        new_id = secrets.token_hex(6)

        await self.async_set_unique_id(new_id)
        self._abort_if_unique_id_configured(updates=user_input)

        return self.async_create_entry(
            title=NAME,
            data=user_input,
            options=user_input,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry: ConfigEntry) -> OptionsFlow:
        """Handle callback for options flow."""
        return HomeMaintenanceOptionsFlowHandler(config_entry)


class HomeMaintenanceOptionsFlowHandler(OptionsFlow):
    """Options flow for Home Maintenenance."""

    def __init__(self, config_entry: ConfigEntry) -> None:
        """Initialize setup of options flow."""
        self.config_entry = config_entry

    async def async_step_init(
        self, user_input: dict[str, Any] | None
    ) -> ConfigFlowResult:
        """Handle a flow initialized by the user."""
        if user_input is not None:
            result = self.async_create_entry(title="", data=user_input)
            self.hass.async_create_task(
                self.hass.config_entries.async_reload(self.config_entry.entry_id)
            )
            return result

        return self.async_show_form(
            step_id="init",
            data_schema=get_options_schema(self.config_entry),
        )
