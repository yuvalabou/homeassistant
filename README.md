[![GitHub last commit](https://img.shields.io/github/last-commit/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/geekofweek/HomeAssistant-Config/commits/master)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-0.117.1%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)
[![CI](https://img.shields.io/github/workflow/status/yuvalabou/HomeAssistant-Config/Home%20Assistant?label=GitHub%20CI&style=plasticr)](https://github.com/yuvalabou/HomeAssistant-Config/actions)
[![Commits/Year](https://img.shields.io/github/commit-activity/y/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/yuvalabou/HomeAssistant-Config/commits/master)
[![GitHub stars](https://img.shields.io/github/stars/yuvalabou/HomeAssistant-Config.svg?style=plasticr)](https://github.com/yuvalabou/HomeAssistant-Config/stargazers)

<h2 align =
    "center">
      🏡 <a href="https://www.home-assistant.io">Home Assistant</a> Configuration &amp; documentation for my Smart Home.
</h2>

<p align =
    "center">
    Hi, My name is Yuval Aboulafia.
</p>

<p align =
    "center">
    Please ⭐ this repo if you find it useful.
</p>
    <p align =
        "center">
    <a href =
        "https://www.buymeacoffee.com/HMa8m26"
        target="_blank">
            <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
            alt="Buy Me A Coffee"
            style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;">
</p>

## [GitHub CI](https://github.com/yuvalabou/HomeAssistant-Config/blob/master/.github/workflows/homeassistant.yml)

Every push or PR is checked with [GitHub actions](https://github.com/yuvalabou/HomeAssistant-Config/actions?query=workflow%3A%22Home+Assistant%22), Ensuring proper YAML formatting and configuration pass against current and RC versions of Home Assistant.
I did it mainly as a good practice and learning experience as I obviously can check it localy.
You may benefit from the script if you want to implement it yourself, But it's also guarantee that whatever you copy from this repo, Will work!

-----

## Statistics

| Entities | [Sensors](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/sensor) | [Binary Sensors](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/binary_sensor) | [Switches](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/switch) | [Automations](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/automation) | [Scripts](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/script) |
|:--------:|:-------:|:--------------:|:--------:|:-----------:|:-------:|
|408       |268      |32              |7         |34           |29       |

-----

## Lovelace

| Lovelace Mode | Resources | Views |
|:-------------:|:---------:|:-----:|
|YAML           |17         |8      |

[Lovelace configurations](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/lovelace/ui-lovelace)

### Devices

| Roborock S50 | YEELIGHT (YLDP06YL) | Sensibo Sky |
|:------------:|:-------------------:|:-----------:|
|<img src="https://www.lior-electric.co.il/wp-content/uploads/2019/06/46947609c.gif.jpeg" width = 100>|<img src="https://poood.ru/img/goods/yeelight_lampa_xiaomi_led_bulb_color_1700k-6500k_yldp06yl_5.jpg" width=100>|<img src="https://cdn.shopify.com/s/files/1/1669/6891/products/minimised-M16_128691-1_1024x1024.jpg?v=1583048706" width=100>
|1             |3                    |2            |

-----

## Official Addons

<img src =
    "https://esphome.io/_static/logo-text.svg"
    align="right"
    width=150>

### [ESPHOME](https://esphome.io/index.html)

ESPHome is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems.

[ESPHome configurations folder](https://github.com/yuvalabou/HomeAssistant-Config/tree/master/esphome)

| Multisensors |
|:------------:|
|2             |

<img src =
    "https://raw.githubusercontent.com/home-assistant/hassio-addons/master/samba/icon.png"
    align = "right"
    width=50>

### [Samba](https://github.com/home-assistant/hassio-addons/tree/master/samba)

This Add-on allows you to enable file sharing across different operating systems over a network.

<img src =
    "https://raw.githubusercontent.com/home-assistant/hassio-addons/master/mariadb/logo.png"
    align = "right"
    width=150>

### [MariaDB](https://github.com/home-assistant/hassio-addons/tree/master/mariadb)

MariaDB SQL database for Home Assistant.

<img src =
    "https://github.com/hassio-addons/addon-nut/blob/master/nut/icon.png?raw=true"
    align = "right"
    width=50>

### [Network UPS Tools](https://github.com/hassio-addons/addon-nut)

A Network UPS Tools daemon to allow you to easily manage battery backup (UPS) devices connected to your Home Assistant machine.

-----

## HACS custom components

<img src =
    "https://avatars2.githubusercontent.com/u/56713226?s=200&v=4"
    align = "right"
    width=50>

[HACS](https://github.com/hacs/integration) is Home Assistant Community Store

- [Official site](https://hacs.xyz/) - For installation instructions
- [Releases](https://github.com/hacs/integration/releases)

### Integrations

- [Anniversaries](https://github.com/pinkywafer/Anniversaries)
- [FeedParser](https://github.com/custom-components/feedparser)
- [Read my meter](https://github.com/maorcc/citymind_water_meter)
- [Xiaomi cloud map extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor)

### Lovelace-UI Enhancements

- [Animated Consumption Card](https://github.com/bessarabov/animated-consumption-card)
- [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities)
- [Bar Card](https://github.com/custom-cards/bar-card)
- [Battery State Card](https://github.com/maxwroc/battery-state-card)
- [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row)
- [Hui-Element](https://github.com/thomasloven/lovelace-hui-element) - The most versatile of them all.
- [Lovelace Swipe Navigation](https://github.com/maykar/lovelace-swipe-navigation)
- [Mini Graph Card](https://github.com/kalkih/mini-graph-card) - This one is probably one of the more powerful cards out there.
- [Multiple Entity Row](https://github.com/benct/lovelace-multiple-entity-row)
- [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat)
- [Weather Card](https://github.com/bramkragten/weather-card)
