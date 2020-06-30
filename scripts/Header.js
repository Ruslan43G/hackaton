export default class Header {
    constructor(data, selectors) {
        this._title = document.querySelector(selectors.title);
        this._img = document.querySelector(selectors.img);
        this._main = data.main;
        this._icon = data.icon;
    }

    setValues() {
        this._title.textContent = this._main;
        this._img.src = this._icon;
        this._img.alt = 'новый альт'
    }
}