fetch-deps:
	rm -fr ./viz/deps
	mkdir ./viz/deps
	curl https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js > ./viz/deps/angular.js
	curl https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js > ./viz/deps/jquery.js

serve:
	python -m SimpleHTTPServer
