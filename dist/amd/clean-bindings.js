define(['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CleanBindingCommands = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var CleanBindingCommands = exports.CleanBindingCommands = (_dec = (0, _aureliaTemplating.viewEngineHooks)(), _dec(_class = function () {
    function CleanBindingCommands() {
      _classCallCheck(this, CleanBindingCommands);
    }

    CleanBindingCommands.prototype.afterCompile = function afterCompile(viewFactory) {
      var targets = Array.from(viewFactory.template.querySelectorAll('.au-target'));
      if (!targets.length) {
        return;
      }

      for (var _iterator = targets, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var el = _ref;

        for (var i = 0; i < el.attributes.length; i++) {
          var attr = el.attributes[i];
          var parts = attr.name.split('.');
          if (parts.length === 2) {
            el.removeAttribute(attr.name);
            i--;
          }
        }
        if (el.hasAttribute('ref')) {
          el.removeAttribute('ref');
        }
      }

      var resources = viewFactory.resources;
      var attributes = Object.keys(resources.attributes);
      while (resources.hasParent) {
        resources = resources.parent;
        attributes.push.apply(attributes, Object.keys(resources.attributes));
      }

      var _loop = function _loop() {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) return 'break';
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) return 'break';
          _ref2 = _i2.value;
        }

        var attr = _ref2;

        var elements = targets.filter(function (el) {
          return el.hasAttribute(attr);
        });
        if (!elements.length) {
          return 'continue';
        }
        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var _el = _ref3;

          _el.removeAttribute(attr);
        }
      };

      _loop2: for (var _iterator2 = attributes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        var _ret = _loop();

        switch (_ret) {
          case 'break':
            break _loop2;

          case 'continue':
            continue;}
      }
    };

    CleanBindingCommands.prototype.afterCreate = function afterCreate(view) {
      var targets = view.firstChild.parentNode.querySelectorAll('.au-target');
      if (!targets.length) {
        return;
      }

      for (var i = 0; i < targets.length; i++) {
        var el = targets[i];
        el.removeAttribute('au-target-id');
        el.classList.remove('au-target');
        if (el.className === '') {
          el.removeAttribute('class');
        }
      }
    };

    return CleanBindingCommands;
  }()) || _class);
});