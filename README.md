![Maintenance](https://img.shields.io/maintenance/yes/2022.svg?style=plasticr)
[![GitHub last commit](https://img.shields.io/github/last-commit/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/geekofweek/HomeAssistant-Config/commits/master)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-2022.12.6%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)
[![Commits/Year](https://img.shields.io/github/commit-activity/y/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/yuvalabou/HomeAssistant-Config/commits/master)
[![GitHub stars](https://img.shields.io/github/stars/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/yuvalabou/HomeAssistant-Config/stargazers)

<h2 align =
    "center">
      🏡 <a href="https://www.home-assistant.io">Home Assistant</a> Configuration &amp; documentation for my Smart Home.
</h2>

<p align = "center">
    Hi, My name is Yuval Aboulafia.
</p>

<p align = "center">
    Please ⭐ this repo if you find it useful.
</p>
    <p align = "center">
    <a href =
        "https://www.buymeacoffee.com/HMa8m26"
        target="_blank">
            <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
            alt="Buy Me A Coffee"
            style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;">
</p>

-----

## Statistics

| Type | Count |
|------|:-----:|
| **Entities** | 499 |
| **[Sensors](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/components/sensor)** | 263 |
| **[Binary Sensors](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/components/binary_sensor)** | 69 |
| **[Switches](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/components/switch)** | 17 |
| **[Buttons]()** | 18 |
| **[Lights](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/components/light)** | 14 |
| **[Automations](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/automation)** | 59 |
| **[Scripts](https://github.com/yuvalabou/homeassistant/tree/master/homeassistant/config/components/script)** | 14 |

### Lines of code
| Type | Lines |
|:----:|:-----:|
| Python | 171186 |
| Yaml | 3857 |

-----

### Devices

| Nest mini | Roborock S50 | YEELIGHT (YLDP06YL) | Tuya generic outlet | Shelly 2.5 | Shelly 1PM | Tuya ceiling light | Sonoff IFan04 |
|:---------:|:------------:|:-------------------:|:-------------------:|:----------:|:----------:|:------------------:|:-------------:|
|<img src="https://lh3.googleusercontent.com/7pq6Fhyz_qUGO8ORh6y0Bn6g7lRSBg3yHkNBXmt51g-mc2Viuv6LMjk4E0NXZGI7Rk4" width = 100>|<img src="https://www.lior-electric.co.il/wp-content/uploads/2019/06/46947609c.gif.jpeg" width = 100>|<img src="https://poood.ru/img/goods/yeelight_lampa_xiaomi_led_bulb_color_1700k-6500k_yldp06yl_5.jpg" width=100>|<img src="https://consent.trustarc.com/get?name=tuya_logo2.png" width=100>|<img src="https://cdn2.botland.store/74788-large_default/shelly-25-double-relay-switch-and-roller-shutter-andoid-ios-application.jpg" width = 100>|<img src="https://shelly.cloud/wp-content/uploads/2021/09/shelly1pm-comparision.png" width = 100> |<img src="https://consent.trustarc.com/get?name=tuya_logo2.png" width=100>|<img src="https://www.megateh.eu/files/products/00/60/69/sonoff-ifan04.jpg" width = 100>
|1          |1             |3                    |2                    |1           |5           |2                   |1              |


### Zigbee devices

| CC2531 (HUB) | Aqara button | Aqara Contact sensor |
|:------------:|:------------:|:--------------------:|
|<img src="https://images-na.ssl-images-amazon.com/images/I/51l1ARtFNYL._AC_SL1000_.jpg" width = 100>|<img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HP0V2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1586455751752" width = 100>|<img src="https://www.megateh.eu/files/products/00/49/45/mccgq11lm.png" width = 100>|
|1             |1             |4                     |


### Custom devices designed by me

| Multisensor (ESPHome) | WLED Strip          | Hot water sensor (ESPHome) |
|:---------------------:|:-------------------:|:--------------------------:|
|2                      |(2 - Not implemented)|(1 - Not implemented)       |

-----

### The server

| NanoPi NEO3                                          |
|:----------------------------------------------------:|
| HomeAssistant                                        |
| ESPHome                                              |
| Mosquitto broker                                     |
| [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt) |
| Unifi-Controller                                     |

-----

## HACS custom components

<img src =
    "https://avatars2.githubusercontent.com/u/56713226?s=200&v=4"
    align = "right" width=90>

[HACS](https://github.com/hacs/integration) is Home Assistant Community Store

- [Official site](https://hacs.xyz/) - For installation instructions
- [Releases](https://github.com/hacs/integration/releases)

### Integrations

- [FeedParser](https://github.com/custom-components/feedparser)
- [Home Connect Alternative](https://github.com/ekutner/home-connect-hass)
- [Powercalc](https://github.com/bramstroker/homeassistant-powercalc)
- [SmartThinQ](https://github.com/ollo69/ha-smartthinq-sensors)
- [Thermal comfort](https://github.com/dolezsa/thermal_comfort)
- [Watchman](https://github.com/dummylabs/thewatchman)
- [Xiaomi cloud map extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor)

### Lovelace-UI Enhancements

- [Airvisual Card](https://github.com/dnguyen800/air-visual-card)
- [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities)
- [Bar Card](https://github.com/custom-cards/bar-card)
- [Battery Entity Row](https://github.com/benct/lovelace-battery-entity-row)
- [Button Card](https://github.com/custom-cards/button-card)
- [Card Mod](https://github.com/thomasloven/lovelace-card-mod)
- [Clock Weather Card](https://github.com/pkissling/clock-weather-card)
- [Compass Card](https://github.com/tomvanswam/compass-card)
- [Decluttering Card](https://github.com/custom-cards/decluttering-card)
- [Elapsed time Card](https://github.com/kirbo/ha-lovelace-elapsed-time-card)
- [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row)
- [Hui-Element](https://github.com/thomasloven/lovelace-hui-element)
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card)
- [Mini Media Player](https://github.com/kalkih/mini-media-player)
- [Multiple Entity Row](https://github.com/benct/lovelace-multiple-entity-row)
- [Mushroom-cards](https://github.com/piitaya/lovelace-mushroom)
- [RGB light Card](https://github.com/bokub/rgb-light-card)
- [Sun Card](https://github.com/AitorDB/home-assistant-sun-card)
- [Template Entity Row](https://github.com/thomasloven/lovelace-template-entity-row)
- [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card)
- [Timer Bar Card](https://github.com/rianadon/timer-bar-card)
- [Uptime Card](https://github.com/dylandoamaral/uptime-card)
