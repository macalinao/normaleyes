curl -u "4b312b54-cc71-4dc7-b882-3a5ae48ae613":"HET87A1tT3GM" \
-H "Content-Type: text/plain" \
--data-urlencode text@interview_agreeable.txt \
"https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&sentences=false" \
| python -c 'import json,sys;
obj=json.load(sys.stdin);
temp1=obj["document_tone"]["tone_categories"][0]["tones"];
temp2=obj["document_tone"]["tone_categories"][2]["tones"];
print temp1;
print temp2;'
