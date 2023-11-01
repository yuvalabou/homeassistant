"""Constants for the oref_alert integration."""
import logging
from typing import Final
import zoneinfo

DOMAIN: Final = "oref_alert"
TITLE: Final = "Oref Alert"
LOGGER = logging.getLogger(__package__)
DATA_COORDINATOR: Final = "coordinator"
IST = zoneinfo.ZoneInfo("Asia/Jerusalem")

ATTR_ALERT: Final = "alert"
ATTR_AREA: Final = "area"
ATTR_COUNTRY_ALERTS: Final = "country_alerts"
ATTR_COUNTRY_ACTIVE_ALERTS: Final = "country_active_alerts"
ATTR_SELECTED_AREAS_ALERTS: Final = "selected_areas_alerts"
ATTR_SELECTED_AREAS_ACTIVE_ALERTS: Final = "selected_areas_active_alerts"
ATTR_TIME_TO_SHELTER: Final = "time_to_shelter"

CONF_AREAS: Final = "areas"
CONF_ALERT_MAX_AGE: Final = "alert_max_age"
CONF_OFF_ICON: Final = "off_icon"
CONF_ON_ICON: Final = "on_icon"
CONF_POLL_INTERVAL: Final = "poll_interval"
CONF_SENSORS: Final = "sensors"

DEFAULT_ALERT_MAX_AGE: Final = 10
DEFAULT_ON_ICON: Final = "mdi:home-alert-outline"
DEFAULT_OFF_ICON: Final = "mdi:home-outline"
DEFAULT_POLL_INTERVAL: Final = 5

ADD_SENSOR_SERVICE: Final = "add_sensor"
REMOVE_SENSOR_SERVICE: Final = "remove_sensor"
OREF_ALERT_UNIQUE_ID: Final = "oref_alert"
TIME_TO_SHELTER_ID_SUFFIX: Final = "time_to_shelter"
TIME_TO_SHELTER_NAME_SUFFIX: Final = "Time To Shelter"