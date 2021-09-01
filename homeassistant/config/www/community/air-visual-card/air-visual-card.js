// To study:
// Plant Picture Card: https://github.com/badguy99/PlantPictureCard/blob/master/dist/PlantPictureCard.js


// UPDATE FOR EACH RELEASE!!! From aftership-card. Version # is hard-coded for now.
console.info(
  `%c  AIR-VISUAL-CARD  \n%c  Version 0.0.16   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// From weather-card
const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

let oldStates = {}

class AirVisualCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    setConfig(config) {
      const root = this.shadowRoot;
      if (root.lastChild) root.removeChild(root.lastChild);

      const re = new RegExp("(sensor|weather)");
      if (!re.test(config.air_quality_index.split('.')[0])) throw new Error('Please define a sensor or weather entity.');


      const cardConfig = Object.assign({}, config);
      const card = document.createElement('ha-card');
      const content = document.createElement('div');
      const style = document.createElement('style');

      style.textContent = `
        ha-card {
          /* sample css */
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .grid-container {
          border-radius: var(--ha-card-border-radius);
          display: grid;
          grid-template-columns: auto auto auto;
          grid-gap: 0;
        }

        .city {
          grid-column-start: 1;
          grid-column-end: 3;
          text-align: left;
          text-indent: 0.3em;
          font-size: 1.8em;
          font-weight: 300;
          padding: .2em .2em;
          background-color: var(--background-color);
          color: var(--text-color);
        }

        .temp {
          grid-column-start: 3;
          grid-column-end: 4;
          text-align: right;
          font-size: 1.7em;
          font-weight: 300;
          background-color: var(--background-color);
          color: var(--text-color);
          padding: .2em .2em;
        }

        .face {
          border-radius: ${cardConfig.hide_title ? 'var(--ha-card-border-radius)' : '0px'} 0px 0px var(--ha-card-border-radius);
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 1;
          grid-column-end: 2;
          justify-items: center;
          align-items: center;
          display: grid;
          width: 4.5em;
        }

        .face img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          height: 4.5em;
          width: auto;
        }

        .aqiSensor {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 2;
          grid-column-end: 3;
          padding: 0.3em 0.3em;
          height: 5em;
          line-height: 1.1;
          text-align: center;
          justify-items: center;
          margin: auto;
        }

        .aplSensor {
          grid-row-start: 2;
          grid-row-end: 3;
          grid-column-start: 3;
          grid-column-end: 4;
          text-align: center;
          line-height: 1;
          padding: .1em .1em;
          font-size: 1.8em;
          margin: auto;
        }

        .mainPollutantSensor {
          float: center;
          border: 0;
          padding: .1em .1em;
          background-color: white;
          border-radius: 4px;
          font-size: 0.4em;
          font-weight: bold;
        }
      `
      content.innerHTML = `
      <div id='content'>
      </div>
      `;

      card.appendChild(content);
      card.appendChild(style);
      root.appendChild(card);
      oldStates = {}
      this._config = cardConfig;
    }

    shouldNotUpdate(config, hass) {
      let clone = JSON.parse(JSON.stringify(config))
      delete clone["city"]
      delete clone["type"]
      delete clone["icons"]
      delete clone["hide_title"]
      delete clone["hide_face"]
      let states = {}
      for (let entity of Object.values(clone)) {
        states[entity] = hass.states[entity]
      }
      if (JSON.stringify(oldStates) === JSON.stringify(states)) {
        return true
      }
      oldStates = states
      return false
    }

    set hass(hass) {
      const config = this._config;
      const root = this.shadowRoot;
      const card = root.lastChild;
      if (this.shouldNotUpdate(config, hass)) {
        return 
      }

      const hideTitle = config.hide_title ? 1 : 0;
      const hideFace = config.hide_face ? 1 : 0;
      const hideAQI = config.hide_aqi ? 1 : 0;
      const hideAPL = config.hide_apl ? 1 : 0;
      // points to local directory created by HACS installation
      const iconDirectory = config.icons || "/hacsfiles/air-visual-card";
      const country = config.country || 'US';
      const city = config.city || '';
      const tempSensor = config.temp || '';
      const weatherStatus = config.weather || '';
      // value is used as a string instead of integer in order for 
      const aqiSensor = { name: 'aqiSensor', config: config.air_quality_index || null, value: 0 };
      const aplSensor = { name: 'aplSensor', config: config.air_pollution_level || null, value: 0 };
      const mainPollutantSensor = { name: 'mainPollutantSensor', config: config.main_pollutant || null, value: 0 };
      const sensorList = [aqiSensor, aplSensor, mainPollutantSensor];
      const unitOfMeasurement = hass.states[aqiSensor.config] ? hass.states[aqiSensor.config].attributes['unit_of_measurement'] : 'AQI';

      const AQIbgColor = {
        '1': `#A8E05F`,
        '2': '#FDD74B',
        '3': '#FE9B57',
        '4': '#FE6A69',
        '5': '#A97ABC',
        '6': '#A87383',
      };
      const AQIfaceColor = {
        '1': `#B0E867`,
        '2': '#E3C143',
        '3': '#E48B4E',
        '4': '#E45F5E',
        '5': '#986EA9',
        '6': '#A5516B',
      };
      const AQIfontColor = {
        '1': `#718B3A`,
        '2': '#A57F23',
        '3': '#B25826',
        '4': '#AF2C3B',
        '5': '#634675',
        '6': '#683E51',
      };

      const weatherIcons = {
        'clear-night': 'mdi:weather-night',
        'cloudy': 'mdi:weather-cloudy',
        'fog': 'mdi:weather-fog',
        'hail': 'mdi:weather-hail',
        'lightning': 'mdi:weather-lightning',
        'lightning-rainy': 'mdi:weather-lightning-rainy',
        'partlycloudy': 'mdi:weather-partly-cloudy',
        'pouring': 'mdi:weather-pouring',
        'rainy': 'mdi:weather-rainy',
        'snowy': 'mdi:weather-snowy',
        'snowy-rainy': 'mdi:weather-snowy-rainy',
        'sunny': 'mdi:weather-sunny',
        'windy': 'mdi:weather-windy',
        'windy-variant': `mdi:weather-windy-variant`,
        'exceptional': '!!',
      }

      // WAQI sensor-specific stuff
      // AirVisual sensors have the APL description as part of the sensor state, but WAQI doesn't. These APL states will be used as backup if AirVisual sensors is not used.
      const APLdescription = {
        '1': 'Good',
        '2': 'Moderate',
        '3': 'Unhealthy for Sensitive Groups',
        '4': 'Unhealthy',
        '5': 'Very Unhealthy',
        '6': 'Hazardous',
      }
      const pollutantUnitValue = {
        'pm25': 'µg/m³',
        'pm10': 'µg/m³',
        'o3': 'ppb',
        'no2': 'ppb',
        'so2': 'ppb',
      }
      const mainPollutantValue = {
        'p2': 'PM2.5',
        'pm25': 'PM2.5',
        'pm10': 'PM10',
        'o3': 'Ozone',
        'no2': 'Nitrogen Dioxide',
        'so2': 'Sulfur Dioxide',
      }

      let currentCondition = '';
      let tempValue = '';
      let pollutantUnit = '';
      let apl = '';
      let mainPollutant = '';

      let getAQI = function () {
        switch (true) {
          case (aqiSensor.value <= 50):
            return '1'; // return string '1' to pull appropriate AQI icon filename ('ic-face-1.svg') in HTML
          case (aqiSensor.value <= 100):
            return '2';
          case (aqiSensor.value <= 150):
            return '3';
          case (aqiSensor.value <= 200):
            return '4';
          case (aqiSensor.value <= 300):
            return '5';
          case (aqiSensor.value <= 9999):
            return '6';
          default:
            return '1';
        }
      };

      var i;
      // Use this section to assign values (real or placeholder), after doing validation check
      for (i = 0; i < sensorList.length; i++) {
        if (typeof hass.states[sensorList[i].config] == "undefined") { continue; }            
        // if Main Pollutant is an Airvisual sensor, else if if it is an WAQI sensor
        if (typeof hass.states[mainPollutantSensor.config] != "undefined") {
          if (typeof hass.states[mainPollutantSensor.config].attributes['pollutant_unit'] != "undefined") {
            pollutantUnit = hass.states[mainPollutantSensor.config].attributes['pollutant_unit'];
            // workaround related to Github issue #48. Using hard-coded translation in dictionary mainPollutantValue.
            //  mainPollutant = hass.states[mainPollutantSensor.config].state;
            mainPollutant = mainPollutantValue[hass.states[mainPollutantSensor.config].state];
          } else if (typeof hass.states[mainPollutantSensor.config].attributes['dominentpol'] != "undefined") {
            pollutantUnit = pollutantUnitValue[hass.states[mainPollutantSensor.config].attributes['dominentpol']];
            mainPollutant = mainPollutantValue[hass.states[mainPollutantSensor.config].attributes['dominentpol']];
          } else {
            pollutantUnit = 'pollutant unit';
            mainPollutant = 'main pollutant';
          }         
        }
        if (typeof hass.states[aqiSensor.config] != "undefined") {
          aqiSensor.value = hass.states[aqiSensor.config].state;
        }
        // Check if APL is an WAQI sensor (because the state is an integer). Returns 'NaN' if it is not a number
        if (typeof hass.states[aplSensor.config] != "undefined") {
          let aplParse = parseInt(hass.states[aplSensor.config].state)
          if (!isNaN(aplParse)) {
            apl = APLdescription[getAQI()];      
          } else {
          // Commenting this out as workaround for Github issue #48. The sensor.u_s_air_pollution_level uses keys for translation so text doesn't look nice. 
          // Relying on hard-coded English translation defined in APLdescription variable  
          //  apl = hass.states[aplSensor.config].state;
            apl = APLdescription[getAQI()];
          }
        }
      };


      if (tempSensor.split('.')[0] == 'sensor') {
        tempValue = hass.states[tempSensor].state + 'º';
        if (weatherStatus !== '') { currentCondition = hass.states[weatherStatus].state };
      } else if (tempSensor.split('.')[0] == 'weather') {
        tempValue = hass.states[tempSensor].attributes['temperature'] + 'º';
        currentCondition = hass.states[tempSensor].state;
      }




      let faceHTML = ``;

      let card_content = `
        <div class="grid-container" style="background-color: ${AQIbgColor[getAQI()]};">
        `;
      if (!hideTitle) {
        card_content += `
        <div class="city">${city}</div>
        <div class="temp"><ha-icon icon="${weatherIcons[currentCondition]}"></ha-icon>   ${tempValue}</div>
        `;
      }

      if (!hideFace){
        card_content += `
        <div class="face" id="face" style="background-color: ${AQIfaceColor[getAQI()]};">
            <img src="${iconDirectory}/ic-face-${getAQI()}.svg"></img>
          </div>
        `;
      }

      if (!hideAQI){
        card_content += `
          <div class="aqiSensor" id="aqiSensor" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
            <div style="font-size:3em;">${aqiSensor.value}</div>
            ${country} ${unitOfMeasurement}
          </div>
        `;
      }
      if (!hideAPL){        
        card_content += `
          <div class="aplSensor" id="aplSensor" style="background-color: ${AQIbgColor[getAQI()]}; color: ${AQIfontColor[getAQI()]}">
            ${apl}
            <br>
            <div class="mainPollutantSensor" id="mainPollutantSensor">
              ${mainPollutant} | ${pollutantUnit}
            </div>
          </div>     
        `;
      }
      card_content += `
      </div> 
      `;


      root.lastChild.hass = hass;
      root.getElementById('content').innerHTML = card_content;

      // hard-coded version of click event
      if (!hideFace){
	      card.querySelector('#face').addEventListener('click', event => {   // when selecting HTML id, do not use dash '-'
        fireEvent(this, "hass-more-info", { entityId: aqiSensor.config });
        });
      }
      if (!hideAQI){
        card.querySelector('#aqiSensor').addEventListener('click', event => {   // when selecting HTML id, do not use dash '-'
        fireEvent(this, "hass-more-info", { entityId: aqiSensor.config });
        });
      }
      if (!hideAPL){
        card.querySelector('#aplSensor').addEventListener('click', event => {   // when selecting HTML id, do not use dash '-'
          fireEvent(this, "hass-more-info", { entityId: aplSensor.config });
        });
        card.querySelector('#mainPollutantSensor').addEventListener('click', event => {   // when selecting HTML id, do not use dash '-'  
          fireEvent(this, "hass-more-info", { entityId: mainPollutantSensor.config });
        });
      }
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 1;
    }
}

customElements.define('air-visual-card', AirVisualCard);

// Configure the preview in the Lovelace card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'air-visual-card',
  name: 'Air Visual Card',
  preview: false,
  description: 'This is a Home Assistant Lovelace card that uses the AirVisual Sensor to provide air quality index (AQI) data and creates a card like the ones found on AirVisual website. Requires the AirVisual Sensor to be setup. Tested with Yahoo and Darksky Weather component.'
});
