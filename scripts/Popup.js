export default class Popup {
  constructor(popup, mainImage, images) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._targetOverlayClose = this._targetOverlayClose.bind(this);
    this._mainImage = mainImage;
    this._images = images;
  }

  open() {
    
    this._popup.classList.remove('popup_hidden');
    const arrayImg = Array.from(document.querySelectorAll('.popup__item'));
    for (let i = 0; i < arrayImg.length; i++) {
      arrayImg[i].addEventListener('click', () => {
        this._mainImage.src = this._images[i];
        this.close();
      });
      arrayImg[i].src = this._images[i];
    };
    this._setEventListeners();
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