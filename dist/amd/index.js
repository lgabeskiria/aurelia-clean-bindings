define(['exports', './clean-bindings'], function (exports, _cleanBindings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'CleanBindingCommands', {
    enumerable: true,
    get: function () {
      return _cleanBindings.CleanBindingCommands;
    }
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./clean-bindings');
  }
});