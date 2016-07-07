# aurelia-clean-bindigs

This plugin will clean up your bindings:

```html
<template>
  <input type="text" value.bind="value" change.trigger="onChange($event)">
  <label css="color: ${value}">${value}</label>
  <div custom-attribute="color.bind: squareColor; side-length.bind: squareSize"></div>
</template>
```

After compilation this view becomes:

```html
<template>
  <input type="text" class="au-target" au-target-id="...">
  <label class="au-target" au-target-id="...">...</label>
  <div class="au-target" au-target-id="..."></div>
</template>
```

After ViewFactory creates view it becomes:

```html
<template>
  <input type="text">
  <label>...</label>
  <div></div>
</template>
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## How to install this plugin?

1. In your project install the plugin via `jspm` with following command

  ```shell
jspm install npm:aurelia-clean-bindings
  ```
2. Make sure you use [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

  ```html
  <body aurelia-app="main">
  ...
  ```
3. Create (if you haven't already) a file `main.js` in your `src` folder with following content:

```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-clean-bindings');

    aurelia.start().then(a => a.setRoot());
  }
```
