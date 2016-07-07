import { viewEngineHooks, ViewFactory, View } from 'aurelia-templating';

@viewEngineHooks()
export class CleanBindingCommands {

  /**
   * After view is compiled we can clean up bindings
   * @param {ViewFactory} viewFactory
   */
  afterCompile(viewFactory: ViewFactory) {
    let targets = Array.from(viewFactory.template.querySelectorAll('.au-target'));
    if (!targets.length) {
      return;
    }
    // remove all bindings from elements
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
    // collect all custom attribute names
    let resources = viewFactory.resources;
    let attributes = Object.keys(resources.attributes);
    while (resources.hasParent) {
      resources = resources.parent;
      attributes.push(...Object.keys(resources.attributes));
    }
    // remove all custom attributes from elements
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

  /**
   * After view is created we can remove `au-target` class and [au-target-id] attribute from elements
   * @param {View}
   */
  afterCreate(view: View) {
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
}
