export default class TextEditor {
  constructor(mainContainer) {
    this._box = mainContainer;
  }

  getLocalText() {
  // если данные есть
    if (localStorage.getItem('boxText') !== null) {
    // то покажи на странице
      this._box.innerHTML = localStorage.getItem('boxText');
    }
  }

  handleKeyListener() {
    document.addEventListener('keydown', () => {
      // отправляем текст в хранилище
      localStorage.setItem('boxText', this._box.innerHTML);
    });
  }
}