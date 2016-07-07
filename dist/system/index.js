'use strict';

System.register(['./clean-bindings'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_cleanBindings) {
      var _exportObj = {};
      _exportObj.CleanBindingCommands = _cleanBindings.CleanBindingCommands;

      _export(_exportObj);
    }],
    execute: function () {
      function configure(config) {
        config.globalResources('./clean-bindings');
      }

      _export('configure', configure);
    }
  };
});