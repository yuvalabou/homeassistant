<h3 align="center">Home Assistant Configuration &amp; Documentation for my Smart House.
<p align="center">
My name is Yuval Aboulafia.
I live in <img src="https://github.com/oxguy3/flags/blob/master/mini/il.png"/></p>
<p align="center">Be sure to :star: my repo!</p>

<a href="https://www.buymeacoffee.com/HMa8m26" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<hr --- </hr>

## Addons:
TBD

<hr --- </hr>

### Stats:

| Sensors | Binary Sensors | Automations | Scripts |
|:-------:|:--------------:|:-----------:|:-------:|
|219      |23              |29           |17       |

<hr --- </hr>

<p>
<img src="https://github.com/yuvalabou/HomeAssistant-Config---WIP/blob/master/HA_pictures/Xiaomi_Logo.png" width="200"/>
<p/>


#### Devices:

| Vacuum | YEELIGHT (YLDP06YL) | WLED strips |
|:------:|:-------------------:|:-----------:|
|1       |3                    |1            |


<hr --- </hr>

<p>
<img src="https://brands.home-assistant.io/esphome/logo.png" width="200"/>
<p/>

<p align="left">I Flashed all of my Sonoff devices with ESPhome as it more secure and local
As I believe that a more unifying language for all my devices is the way to go when doing home-automation

<p>
<img src="https://github.com/yuvalabou/HomeAssistant-Config---WIP/blob/master/HA_pictures/Sonoff%20Logo.png" width="200"/>
<p/>

#### Sonoff Modules:

| Sonoff Basic R3 |
|:---------------:|
|1                |

This sonoff is used as my smart shabat plate switch using esphome firmware.
code available in esphome folder inside this repo.

<p align="left">For Multisensors I have approached the DIY method and build my own multisensor for each room with ESPhome firmware, and which are all powered from an old desktop power-supply.
Each sensor node contains an MCP23017 IO Expender to allow more sensors and actuators to be connected.
Each node at base configuration contains:
  1 Atmo sensor
  1 PIR Motion sensor
  1 MCP23017 IO Expender
  1 BH1750 Light sensor

#### DIY Modules:

| NodeMCU-8266 | ESP-01 | ESP-12E |
|:------------:|:------:|:-------:|
|6             |1       |4        |

#### DIY SMART SAFE:

the original circuit was controlled with keypad which can be integrated later but as of now i only want the safe to be locally and automatically controlled.
this simple circuit is operated from 4 AA batteries to provide about 6V.

Using Easy-EDA I have designed a NodeMCU shield to replace the original safe electronics module - and using ESPHome I can now integrate it into Home-Assistant
it allows detection of the state of the safe, notifications, battery voltage monitoring and further improvement in the future such as lighting inside the safe when opened.

#### DIY Sensors:

<p align="left">As stated above - most of those sensors are connected to the Multisensors NodeMCU's.

| BME280 Atmo-sensor | PIR Motion sensor | Door and Window sensors | BME680 Atmo-sensor | DHT-11 | ACS712 Power-sensor |
|:------------------:|:-----------------:|:-----------------------:|:------------------:|:------:|:-------------------:|
|6                   |2                  |                         |                    |        |                     |

#### DIY Actuators:

| 30 Amps relay modules | 10 Amps relay modules |
|:---------------------:|:---------------------:|
|1                      |5                      |

<hr --- </hr>

### Lovelace:

| Lovelace Mode | Resources | Views | I-Frames |
|:-------------:|:---------:|:-----:|:--------:|
|YAML           |20         |9      |1         |

<hr --- </hr>

#### HACS custom components:

##### components
TBD

##### lovelace enhancements:
TBD

<hr --- </hr>

## network map:
TBD

<hr --- </hr>

## license:

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>