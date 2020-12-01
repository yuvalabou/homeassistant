"""Get daily forecast from IWS"""
from paho.mqtt import client as mqtt

import html
import ssl

import feedparser

RSS = 'https://ims.gov.il/sites/default/files/ims_data/rss/forecast_country/rssForecastCountry_he.xml'
BROKER = '10.0.0.6'

def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    pass

def on_publish(client, userdata, result):
    print("Published")
    pass

client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish

client.connect(BROKER, 1883, 60)

if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context

FEED = feedparser.parse(RSS)

def get_state() -> str:
    pass

def get_time() -> str:
    pass

def short_term_forecast() -> str:
    for item in FEED.entries:
        escaped = html.escape(item.description)

        sep = "/font&gt;"
        escaped = escaped.split(sep, 1)[1]

        values = [
            "br /&gt;",
            "/b&gt;",
            "b&gt;",
            "font style=&quot;text-decoration: underline;&quot;&gt;",
            "&lt;",
            "עדכון אחרון:",
        ]

        for v in values:
            escaped = escaped.replace(v, " ")

        escaped = escaped.replace(":", "\n")
        escaped = escaped.replace("\n", " ")
        escaped = escaped.replace("    ", " ")
        escaped = escaped.replace("  ", " ")
        escaped = escaped.replace("-", "")

        escaped = ''.join([
            i for i in escaped if not i.isdigit()
        ])

        sep2 = "תחזית לימים הקרובים"
        weather = escaped.split(sep2, 1)[0]

        return weather

short_term_forecast()
client.publish("homeassistant/iws", short_term_forecast.weather)
