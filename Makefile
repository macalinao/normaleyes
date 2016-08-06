fetch-deps:
	rm -fr ./viz/vendor
	mkdir ./viz/vendor
	curl https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js > ./viz/vendor/angular.js
	curl https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.js > ./viz/vendor/jquery.js

serve:
	python -m SimpleHTTPServer
