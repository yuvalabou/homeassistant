"""Get daily forecast from IWS"""
import html
import json
import ssl
from datetime import datetime as dt

import feedparser
from paho.mqtt import client as mqtt

RSS = "https://ims.gov.il/sites/default/files/ims_data/rss/forecast_country/rssForecastCountry_he.xml"
BROKER = "10.0.0.6"


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    pass


def on_publish(client, userdata, result):
    print("Published")
    print(json_attrs)
    pass


client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish

client.connect(BROKER)

if hasattr(ssl, "_create_unverified_context"):
    ssl._create_default_https_context = ssl._create_unverified_context

FEED = feedparser.parse(RSS)


def get_time() -> object:
    """Get sensor state"""
    for item in FEED.entries:
        last_updated = dt.strptime(item.guid, "%a, %d %b %Y %H:%M:%S GMT")

        return last_updated


def get_link() -> str:
    """Get link"""
    link = FEED.feed.link

    return link


values = [
    "br /&gt;",
    "/b&gt;",
    "b&gt;",
    "font style=&quot;text-decoration: underline;&quot;&gt;",
    "&lt;",
    "/font&gt;",
    "עדכון אחרון:",
    "/",
]


def short_term_forecast() -> str:
    for item in FEED.entries:
        desc = html.escape(item.description)

        sep = "/font&gt;"
        desc = desc.split(sep, 1)[1]
        sep2 = "תחזית לימים הקרובים"
        desc = desc.split(sep2, 1)[0]

        # First pass
        for v in values:
            desc = desc.replace(v, " ")

        # Second pass
        desc = desc.replace(":", "\n")
        desc = desc.replace("\n", " ")
        desc = desc.replace("    ", "")
        desc = desc.replace("  ", " ")
        desc = desc.replace("-", "")

        desc = "".join([i for i in desc if not i.isdigit()])

        sep2 = "תחזית לימים הקרובים"
        short_term = desc.split(sep2, 1)[0]

        short_term = short_term.strip()
        return short_term


def long_term_forecast() -> str:
    for item in FEED.entries:
        desc = html.escape(item.description)

        sep = "תחזית לימים הקרובים"
        desc = desc.split(sep, 1)[1]

        # First pass
        for v in values:
            desc = desc.replace(v, " ")

        # Second pass
        desc = desc.replace(":", "\n")
        desc = desc.replace("\n", " ")
        desc = desc.replace("    ", "")
        desc = desc.replace("  ", " ")
        desc = desc.replace("-", "")

        long_term = "".join([i for i in desc if not i.isdigit()])
        long_term = long_term.strip()

        return long_term


json_attrs = json.dumps(
    {
        "short_term": short_term_forecast(),
        "long_term": long_term_forecast(),
        "link": get_link(),
    },
    ensure_ascii=False,
    indent=4,
    sort_keys=True,
)

client.publish("homeassistant/iws", get_time())
client.publish("homeassistant/iws/attrs", json_attrs)
