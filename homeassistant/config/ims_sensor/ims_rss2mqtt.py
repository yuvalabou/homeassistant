"""Get daily forecast from IWS"""
import html
import json
from datetime import datetime as dt
from time import sleep

import feedparser
from paho.mqtt import client as mqtt

RSS = "https://ims.gov.il/sites/default/files/ims_data/rss/forecast_country/rssForecastCountry_he.xml"
BROKER = "10.0.0.6"
FEED = feedparser.parse(RSS)


def on_connect(client, userdata, flags, rc):
    pass


def on_publish(client, userdata, result):
    pass


client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish

client.connect(BROKER)


def state() -> str:
    """Get sensor state."""
    for item in FEED.entries:
        last_updated = dt.strptime(item.guid, "%a, %d %b %Y %H:%M:%S GMT")

        return str(last_updated)


def link() -> str:
    """Get link."""
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
    """Get short term forecast."""
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

        short_term = desc.strip()
        return short_term


def long_term_forecast() -> str:
    """Get long term forecast."""
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


attrs = json.dumps(
    {
        "short_term": short_term_forecast(),
        "long_term": long_term_forecast(),
        "link": link(),
    },
    ensure_ascii=False,
    indent=4,
    sort_keys=True,
)

client.publish("homeassistant/ims", state())
client.publish("homeassistant/ims/attrs", attrs)
sleep(5)
client.disconnect()
