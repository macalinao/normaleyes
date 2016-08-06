fetch-deps:
	rm -fr ./viz/deps
	mkdir ./viz/deps
	curl https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js > ./viz/deps/angular.js
