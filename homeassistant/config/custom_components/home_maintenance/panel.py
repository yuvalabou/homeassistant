"""Support for Home Maintenance custom panel."""

import logging
import os

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import (
    PANEL_API_PATH,
    PANEL_API_URL,
    PANEL_ICON,
    PANEL_NAME,
    PANEL_TITLE,
    PANEL_URL,
)

_LOGGER = logging.getLogger(__name__)


async def async_register_panel(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Register custom panel for Home Maintenance."""
    static_path = os.path.join(os.path.dirname(__file__), "panel", "dist")  # noqa: PTH118, PTH120

    # Register static path only once, since it cannot be removed on unload
    if not hass.data.setdefault("home_maintenance_static_path_registered", False):
        await hass.http.async_register_static_paths(
            [StaticPathConfig(PANEL_API_PATH, static_path, cache_headers=False)]
        )
        hass.data["home_maintenance_static_path_registered"] = True

    admin_only = entry.options.get("admin_only", entry.data.get("admin_only", True))
    sidebar_title = entry.options.get(
        "sidebar_title", entry.data.get("sidebar_title", PANEL_TITLE)
    )

    await panel_custom.async_register_panel(
        hass,
        webcomponent_name=PANEL_NAME,
        frontend_url_path=PANEL_URL,
        module_url=PANEL_API_URL,
        sidebar_title=sidebar_title,
        sidebar_icon=PANEL_ICON,
        require_admin=admin_only,
        config={},
    )


def async_unregister_panel(hass: HomeAssistant) -> None:
    """Remove custom panel for Home Maintenenance."""
    frontend.async_remove_panel(hass, PANEL_URL)
    _LOGGER.debug("Removing panel")
