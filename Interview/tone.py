import json
from watson_developer_cloud import ToneAnalyzerV3

tone_analyzer = ToneAnalyzerV3(
   username='https://gateway.watsonplatform.net/tone-analyzer/api',
   password='HET87A1tT3GM',
   version='2016-05-19 ')

print(json.dumps(tone_analyzer.tone(text='A word is dead when it is said, some say. Emily Dickinson'), indent=2))