"""Number platform for Anova Nano."""

import asyncio
from dataclasses import dataclass

from homeassistant.components.number import (
    NumberEntity,
    NumberEntityDescription,
    NumberDeviceClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import UnitOfTime, UnitOfTemperature
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .coordinator import AnovaNanoDataUpdateCoordinator
from .const import DOMAIN
from .entity import AnovaNanoDescriptionEntity


@dataclass(kw_only=True)
class AnovaNanoNumberEntityDescription(NumberEntityDescription):
    """Describes Anova Nano number entity."""

    set_fn: str
    state_attr: str


ENTITY_DESCRIPTIONS = [
    AnovaNanoNumberEntityDescription(
        key="cooking_timer",
        name="Cooking Timer",
        icon="mdi:timer-cog-outline",
        translation_key="cooking_time",
        native_unit_of_measurement=UnitOfTime.MINUTES,
        device_class=NumberDeviceClass.DURATION,
        # Max time settable on device: 99h:55m
        native_max_value=99 * 60 + 55,
        set_fn="set_timer",
        state_attr="timer",
    ),
    AnovaNanoNumberEntityDescription(
        key="target_temp",
        name="Target Temperature",
        icon="mdi:water-thermometer-outline",
        translation_key="target_temp",
        device_class=NumberDeviceClass.TEMPERATURE,
        native_step=0.1,
        set_fn="set_target_temperature",
        state_attr="target_temperature",
    ),
]


async def async_setup_entry(
    hass: HomeAssistant, entry: ConfigEntry, async_add_devices: AddEntitiesCallback
):
    """Set up the binary_sensor platform."""
    coordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_devices(
        [
            AnovaNanoNumberEntity(
                coordinator=coordinator,
                entity_description=ENTITY_DESCRIPTIONS[0],
            ),
            AnovaNanoTargetTempNumberEntity(
                coordinator=coordinator,
                entity_description=ENTITY_DESCRIPTIONS[1],
            ),
        ]
    )


class AnovaNanoNumberEntity(AnovaNanoDescriptionEntity, NumberEntity):
    """Representation of an Anova Nano number entity."""

    def __init__(
        self,
        coordinator: AnovaNanoDataUpdateCoordinator,
        entity_description: AnovaNanoNumberEntityDescription,
    ):
        """Initialize the number entity."""
        super().__init__(coordinator, description=entity_description)
        self.entity_description: AnovaNanoNumberEntityDescription = entity_description

    @property
    def native_value(self):
        """Return the current value of the number entity."""
        return getattr(self.coordinator, self.entity_description.state_attr)

    @property
    def native_unit_of_measurement(self) -> str | None:
        """Return the native unit of measurement."""
        return self.entity_description.native_unit_of_measurement

    async def async_set_native_value(self, value: float):
        """Set the value of the number entity."""
        func = getattr(self.coordinator, self.entity_description.set_fn)

        await func(value)

        # TODO: Check thread safety in pyanova_nano.
        await asyncio.sleep(0.1)

        await self.coordinator.async_request_refresh()


class AnovaNanoTargetTempNumberEntity(AnovaNanoNumberEntity):
    """Represent the target temperatere of the device in both units."""

    @property
    def native_unit_of_measurement(self) -> str | None:
        """The units of degrees as set on the device."""
        return self.coordinator.temp_units

    @property
    def native_min_value(self) -> int:
        """The maximum value in degrees C and F."""
        return 0 if self.native_unit_of_measurement == UnitOfTemperature.CELSIUS else 32

    @property
    def native_max_value(self) -> int:
        """The minimum value in degrees C and F."""
        return (
            92 if self.native_unit_of_measurement == UnitOfTemperature.CELSIUS else 197
        )
