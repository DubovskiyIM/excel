import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
    this.unsubscribers = [];

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return '';
  }

  $dispatch(event, ...args) {
    this.observer.dispatch(event, ...args);
  }

  $on(event, callback) {
    const unsubscribe = this.observer.subscribe(event, callback);
    this.unsubscribers.push(unsubscribe);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsubscribe => unsubscribe());
  }
}
