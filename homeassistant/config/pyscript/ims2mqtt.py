"""Get daily forecast from IMS.gov"""
import html
import json
from datetime import datetime as dt
from time import sleep

import feedparser
from paho.mqtt import client as mqtt

RSS = "https://ims.gov.il/sites/default/files/ims_data/rss/forecast_country/rssForecastCountry_he.xml"
BROKER = "10.0.0.6"
FEED = task.executor(feedparser.parse, RSS)

client = mqtt.Client()


def on_connect(client, userdata, flags, rc):
    pass


def on_publish(client, userdata, result):
    pass


client.on_connect = on_connect
client.on_publish = on_publish


def state() -> str:
    """Return the state of the sensor."""
    for item in FEED.entries:
        last_updated = str(dt.strptime(item.guid, "%a, %d %b %Y %H:%M:%S GMT"))

        return last_updated


def link() -> str:
    """Return the link."""
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
    """Get short term forecast from feed."""
    for item in FEED.entries:
        desc = html.escape(item.description)

        sep = "/font&gt;"
        desc = desc.split(sep, 1)[1]
        sep = "תחזית לימים הקרובים"
        desc = desc.split(sep, 1)[0]

        # First pass
        for v in values:
            desc = desc.replace(v, " ")

        # Second pass
        desc = desc.replace(":", "\n")
        desc = desc.replace("\n", " ")
        desc = desc.replace("    ", "")
        desc = desc.replace("  ", " ")
        desc = desc.replace("-", "")

        # Remove numbers
        desc = "".join([i for i in desc if not i.isdigit()])
        short_term = desc.strip()

        return short_term


def long_term_forecast() -> str:
    """Get long term forecast from feed."""
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

        # Remove numbers
        desc = "".join([i for i in desc if not i.isdigit()])
        long_term = desc.strip()

        return long_term


attrs = json.dumps(
    {
        "short_term": short_term_forecast(),
        "long_term": long_term_forecast(),
        "link": link(),
    },
    ensure_ascii=False,
    indent=2,
)

@service
@time_trigger("cron(0 1 0 0 0)")
def ims_sensor():
    """Send IMS data over MQTT."""
    client.connect(BROKER)
    log.info(f"Connected")

    client.publish("homeassistant/ims", state())
    client.publish("homeassistant/ims/attrs", attrs)
    log.info(f"Published")

    sleep(5)

    client.disconnect()
    log.info(f"Disconnected")
