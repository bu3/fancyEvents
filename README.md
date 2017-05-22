# fancy-events

> it's fancy event manager

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Setup WebDriver I/O dependencies
Run `./wdio.setup.sh` for downloading web drivers for Chrome and Firefox and the Selenium Server


#Running e2e tests
In a terminal window start the app with `npm start` <br/>
In a terminal window run Selenium server with `java -jar -Dwebdriver.gecko.driver=./chromedriver selenium-server-standalone-3.0.1.jar`<br/>
In a terminal window run WDIO with `./node_modules/.bin/wdio wdio.conf.js`<br/>
