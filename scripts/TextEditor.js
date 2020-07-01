export default class TextEditor {
  constructor(mainContainer) {
    this._box = mainContainer;
  }

  getLocalText(name) {
  // если данные есть
    if (localStorage.getItem(this._box) !== null) {
    // то покажи на странице
    //console.log(this._box);
      this._box.innerHTML = localStorage.getItem(name);
    }
  }

  handleKeyListener() {
    document.addEventListener('keydown', (evt) => {
      // отправляем текст в хранилище
      localStorage.setItem(`${evt.target.parentNode.dataset.name}+${Math.floor(Math.random() * 1000)} `, `${evt.target.textContent}`);
    });
  }

  deleteTextForId(name) {
    localStorage.removeItem(name);
  }
}