# IMS Sensor

## prerequisites

The [Pyscript](https://github.com/custom-components/pyscript) custom-component for allowing a more comprehensive python scripts to be used in Home-Assistant.

MQTT Broker of your choice to retrive the data from the sensor.

## The script

Place the script found [here](https://github.com/yuvalabou/HomeAssistant-Config/blob/master/homeassistant/config/pyscript/ims2mqtt.py) in your _config/pyscript_ folder.

This will expose a new service called _pyscript.ims_sensor_.

## The sensor

Create a new MQTT sensor in Home-Assistant

```yaml
sensor:
    - platform: mqtt
        state_topic: "homeassistant/ims"
        json_attributes_topic: "homeassistant/ims/attrs"
        name: "IMS Daily"
        icon: mdi:weather-partly-cloudy
```

To Update the sensor regularly add the following automation

```yaml
sensor:
    - alias: "Update IMS sensor"
    id: 8092fd00-4f2b-46cb-9855-5adde0e310c9
    trigger:
        platform: time_pattern
        hours: "/1"
    action:
        service: pyscript.ims_sensor
```
This will update the sensor every hour.

## TTS

TBD

## Note

This script is evolving as it is relying on an rss feed and some keywords might change.

If your sensor start breaking, please check for a new version in [my repo](https://github.com/yuvalabou/HomeAssistant-Config/blob/master/homeassistant/config/pyscript/ims2mqtt.py)
