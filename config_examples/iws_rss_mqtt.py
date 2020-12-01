"""Get daily forecast from IWS"""

from paho.mqtt import client as mqtt
from time import sleep

import html
import ssl

import feedparser

RSS = 'https://ims.gov.il/sites/default/files/ims_data/rss/forecast_country/rssForecastCountry_he.xml'

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

def on_publish(client, userdata, result):
    print("published")
    pass

client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish

client.connect("10.0.0.6", 1883, 60)

if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context

FEED = feedparser.parse(RSS)

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

    escaped = ''.join(
        [i for i in escaped if not i.isdigit()]
    )

    sep2 = "תחזית לימים הקרובים"
    weather = escaped.split(sep2, 1)[0]

    client.publish("homeassistant/iws", weather)
