export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._targetOverlayClose = this._targetOverlayClose.bind(this);
  }

  open() {
    this._setEventListeners();
    this._popup.classList.remove('popup_hidden');
  }

  close() {
    this._popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._targetOverlayClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _targetOverlayClose(evt) {
    const target = evt.target;
    if (target.classList.contains('popup')) {
      this.close();
    }
  }

  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._targetOverlayClose);
  }
}