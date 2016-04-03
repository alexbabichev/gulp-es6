![Logo](https://github.com/ronaldloyko/generator-gulp-es6-webapp/raw/master/logo.png)

# Gulp + ES6 Web-App Generator

[![Build Status](https://secure.travis-ci.org/ronaldloyko/generator-gulp-es6-webapp.png?branch=master)](https://travis-ci.org/ronaldloyko/generator-gulp-es6-webapp) [![NPM](https://nodei.co/npm/generator-gulp-es6-webapp.png?mini=true)](https://nodei.co/npm/generator-gulp-es6-webapp/)

A [Yeoman](http://yeoman.io/) generator for powerful ES6 web apps.

### Features

#### Modular high quality ES6 JavaScript.
Thanks to **Browserify** and the **Babelify** transform you can write modular JavaScript in full [ES6 syntax](https://babeljs.io/docs/learn-es2015/).
- You can `import` other files and npm modules,
- **ESLint** and the [ES6 StyleGuide by AirBnb](https://github.com/airbnb/javascript) preserve code quality and readability.

#### Less files in production.
In production you end up with few files saving HTTP requests, that means:
- Scripts get compiled and bundled to a single JS file.
- Stylesheets get compiled, auto-prefixed and bundled to a single CSS file.
- All SVG images get bundled to a single SVG sprite image + corresponding CSS file.

In development mode, sourcemaps are generated for easy debugging. In production mode, the bundles get additionally minified.


#### Clean separated directory structure.
Within these directories you are free to structure your files according to your own taste.

- `src` for your source files.

  - `src/svg` for SVG images.

  - `src/js` for JavaScript.

  - `src/styl` for Stylus and CSS.

- `test` for unit tests.

The directory `dist` will be created and contains the built files.

#### CSS with Stylus.
**Stylus** is a powerful, feature-rich, expressive CSS preprocessor that provides nice features like variables, mixins, color-functions and [much more](https://learnboost.github.io/stylus/).

#### Live preview on changes.
During development, a local test server will be launched using **BrowserSync** to keep track of file changes and refresh the browser.

#### Unit tests.
**Mocha** is a powerful [test runner](https://mochajs.org/). Start writing unit tests in ES6!

### Installation
```
$ npm install -g generator-gulp-es6-webapp
```

### Generating
```
$ yo gulp-es6-webapp
```

### Usage

Build the assets in development mode, launches local webserver and watches for changes and rebuilds assets.

```
$ npm start
```

Lint scripts and run unit tests.

```
$ npm test
```

Build the assets for production and launch a local test web server for preview.

```
$ npm run build
```

### License
MIT
