##############################################################################################################
# python script to show the loaded components on a  Hassio instance, and order them alphabetically, grouping
# components that have sub components (attributes)
# this script gets its data from the rest_sensor:
#- platform: rest
#  name: My Config
#  resource: http://localhost:8123/api/config
#  authentication: basic
#  value_template: >
#    {{ value_json.version }}
#  json_attributes:
#    - components
#  headers:
#    Content-Type: application/json
#    Authorization: !secret api_bearer_token
#    User-Agent: Home Assistant REST sensor

# https://community.home-assistant.io/t/template-to-display-loaded-components-on-ha-instance/114402/59
# @123 and @apop pointed to the rest sensor, and made that availabe in Lovelace
# @petro had a great hand in creating the script
# thanks for joining in on a great HA community!
# @mariusthvdb 20190504
##############################################################################################################
attributes = {}
components = hass.states.get('sensor.my_config').attributes['components']
cnt = len(components)
components.sort()

# Make a dictionary of all main domains, add each sub domain to the main domain list.
compdict = {}
for component in components:
    if component.count('.') == 0 and component not in compdict:
        compdict[component] = []
    if component.count('.') == 1:
        domain, subdomain = component.split('.')
        compdict[domain].append(subdomain)

# Make the dictionary into a flat list of strings.

complist = []

for key, value in compdict.items():
    if value:
        value.sort()
        # Adding a domain & series of sub domains
        complist.append('- {}: \n --> {}'.format(key, ', '.join(value)))
    else:
        complist.append('- {}'.format(key))

# join each component with a carriage return
complist = '\n'.join(complist)

text = '{} Loaded Components:\n' \
       '{}'.format(cnt, complist)

attributes['friendly_name'] = 'Components'
attributes['icon'] = 'mdi:format-list-bulleted-type'
attributes['Components'] = cnt
attributes['---------------'] = '--------'

attributes['text'] = complist #text

hass.states.set('sensor.overview_components', cnt, attributes)

# hass.states.set('sensor.overview_components', cnt, {
#     'icon': 'mdi:format-list-bulleted-type',
#     'friendly_name': 'Components',
#     'text': text
#     })
##############################################################################################################
