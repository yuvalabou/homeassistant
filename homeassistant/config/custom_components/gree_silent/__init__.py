from __future__ import annotations
import logging
from typing import Any, Callable
import voluptuous as vol
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

DOMAIN = "gree_silent"
CONF_TARGET_MACS = "target_macs"

CONFIG_SCHEMA = vol.Schema(
    {
        DOMAIN: vol.Schema(
            {
                CONF_TARGET_MACS: vol.Optional([cv.string], default=[]),
            }
        )
    },
    extra=vol.ALLOW_EXTRA,
)

_PATCHED = False

def _inject_buzzer(pack: dict, target_macs: list[str]) -> bool:
    if not (isinstance(pack, dict) and pack.get("t") == "cmd"):
        return False
    
    mac = pack.get("mac")
    mac_l = mac.lower().replace(":", "") if isinstance(mac, str) else None
    
    if target_macs and mac_l not in target_macs:
        return False
        
    opt = pack.get("opt")
    p = pack.get("p")
    
    if not (isinstance(opt, list) and isinstance(p, list)):
        return False
        
    if "Buzzer_ON_OFF" in opt:
        return False
        
    opt.append("Buzzer_ON_OFF")
    p.append(1)
    return True

def _patch_device_send_path(target_macs: list[str]) -> None:
    global _PATCHED
    if _PATCHED:
        return
        
    import greeclimate.device as gdev
    Device = gdev.Device
    
    for name in ["send", "_send", "send_packet", "_send_packet"]:
        orig = getattr(Device, name, None)
        if not callable(orig):
            continue
        if getattr(orig, "__gree_silent_patched__", False):
            continue
            
        def make_wrapper(orig_func: Callable, method_name: str):
            def wrapper(self, obj: Any, *args: Any, **kwargs: Any):
                if isinstance(obj, dict) and obj.get("t") == "pack":
                    pack = obj.get("pack")
                    if isinstance(pack, dict):
                        if _inject_buzzer(pack, target_macs):
                            _LOGGER.debug(
                                "Injected Buzzer_ON_OFF=1 via Device.%s for %s",
                                method_name,
                                pack.get("mac"),
                            )
                return orig_func(self, obj, *args, **kwargs)
            wrapper.__gree_silent_patched__ = True
            return wrapper
            
        setattr(Device, name, make_wrapper(orig, name))
        _LOGGER.warning("gree_silent: patched Device.%s", name)
        _PATCHED = True
        return
        
    _LOGGER.error("gree_silent: could not patch Device send method")

async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    cfg = config.get(DOMAIN, {})
    target_macs = [m.lower().replace(":", "") for m in (cfg.get(CONF_TARGET_MACS) or [])]
    _patch_device_send_path(target_macs)
    return True
