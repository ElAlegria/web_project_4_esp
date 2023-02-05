export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  renderer() {
    this._items.map(item => {
      this._renderer(item)
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}


