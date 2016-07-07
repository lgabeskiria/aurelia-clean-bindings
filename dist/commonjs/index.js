'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleanBindings = require('./clean-bindings');

Object.defineProperty(exports, 'CleanBindingCommands', {
  enumerable: true,
  get: function get() {
    return _cleanBindings.CleanBindingCommands;
  }
});
exports.configure = configure;
function configure(config) {
  config.globalResources('./clean-bindings');
}