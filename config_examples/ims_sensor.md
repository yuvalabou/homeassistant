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
automation:
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

You need to create a notify entity from your media player and use it with the tts of your choice.
have a look at the docs [here](https://www.home-assistant.io/integrations/notify.tts/) and choose hebrew as language as the sensor return its values in hebrew.

Next you will create two new scripts that will pass the sensor attributes to media player.

```yaml
script:
    give_short_term_forecast:
    alias: "Give short term forecast"
    sequence:
        - service: notify.<your_media_player>
          data:
            message: "{{state_attr('sensor.ims_daily', 'short_term')}}"

    give_long_term_forecast:
    alias: "Give long term forecast"
    sequence:
        - service: notify.<your_media_player>
          data:
            message: "{{state_attr('sensor.ims_daily', 'long_term')}}"
```

# Automating

Have at it :)

## Note

This script is evolving as it is relying on an rss feed and some keywords might change.

If your sensor start breaking, please check for a new version in [my repo](https://github.com/yuvalabou/HomeAssistant-Config/blob/master/homeassistant/config/pyscript/ims2mqtt.py)
