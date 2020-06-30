export default class TextEditor {
  constructor(mainContainer) {
    this._box = mainContainer;
  }

  getLocalText() {
  // если данные есть
    if (localStorage.getItem('boxText') !== null) {
    // то покажи на странице
    console.log(this._box);
      this._box.innerHTML = localStorage.getItem('boxText');
    }
  }

  handleKeyListener() {
    document.addEventListener('keydown', (evt) => {
      // отправляем текст в хранилище
      console.log(`${evt.target.textContent}`);
      localStorage.setItem(evt.target, evt.target.textContent);
    });
  }
}