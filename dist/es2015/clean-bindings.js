var _dec, _class;

import { viewEngineHooks, ViewFactory, View } from 'aurelia-templating';

export let CleanBindingCommands = (_dec = viewEngineHooks(), _dec(_class = class CleanBindingCommands {
  afterCompile(viewFactory) {
    let targets = Array.from(viewFactory.template.querySelectorAll('.au-target'));
    if (!targets.length) {
      return;
    }

    for (let el of targets) {
      for (let i = 0; i < el.attributes.length; i++) {
        let attr = el.attributes[i];
        let parts = attr.name.split('.');
        if (parts.length === 2) {
          el.removeAttribute(attr.name);
          i--;
        }
      }
      if (el.hasAttribute('ref')) {
        el.removeAttribute('ref');
      }
    }

    let resources = viewFactory.resources;
    let attributes = Object.keys(resources.attributes);
    while (resources.hasParent) {
      resources = resources.parent;
      attributes.push(...Object.keys(resources.attributes));
    }

    for (let attr of attributes) {
      let elements = targets.filter(el => el.hasAttribute(attr));
      if (!elements.length) {
        continue;
      }
      for (let el of elements) {
        el.removeAttribute(attr);
      }
    }
  }

  afterCreate(view) {
    let targets = view.firstChild.parentNode.querySelectorAll('.au-target');
    if (!targets.length) {
      return;
    }

    for (let i = 0; i < targets.length; i++) {
      let el = targets[i];
      el.removeAttribute('au-target-id');
      el.classList.remove('au-target');
      if (el.className === '') {
        el.removeAttribute('class');
      }
    }
  }
}) || _class);