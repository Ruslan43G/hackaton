export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    }
    );
  }

  clearMethod(items) {
    items.forEach (item => {
      item.remove()
    })
  }

  filterRenderer (object, localArray) {
    if ((localArray.length) === 0) {
      this.renderItems(object);
    } else {
      this.renderItems(localArray);
    }
  }
}