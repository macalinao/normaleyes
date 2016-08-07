API_KEY=9ac8c71b9b7cc602292c9f6900baf48b3fc96cf3
TEXT=interview_aggressive.txt

curl -X POST \
-d "apikey=$API_KEY" \
-d "outputMode=json" \
--data-urlencode text@$TEXT \
"https://gateway-a.watsonplatform.net/calls/text/TextGetEmotion"


curl -X POST \
-d "apikey=$API_KEY" \
-d "outputMode=json" \
--data-urlencode text@$TEXT \
"https://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment"

# curl -X POST \
# -d "apikey=$API_KEY" \
# -d "outputMode=json" \
# --data-urlencode text@sweetbutbad.txt \
# "https://gateway-a.watsonplatform.net/calls/text/TextGetRankedKeywords"

curl -X POST \
-d "apikey=$API_KEY" \
-d "outputMode=json" \
-d "targets=leader|team|project|teamwork|" \
--data-urlencode text@$TEXT \
"https://gateway-a.watsonplatform.net/calls/text/TextGetTargetedSentiment"