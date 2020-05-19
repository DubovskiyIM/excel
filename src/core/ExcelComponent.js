import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
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

  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  $on(event, callback) {
    const unsubscribe = this.observer.subscribe(event, callback);
    this.unsubscribers.push(unsubscribe);
  }

  $dispatchRedux(action) {
    this.store.dispatch(action);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsubscribe => unsubscribe());
  }
}
