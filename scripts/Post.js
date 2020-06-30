export default class Post {
    constructor(postSelector, data) {
        this._selecotor = postSelector;
        this._title = data.title;
        this._text = data.text;
    }

    _getPostTemplate() {
        const element = document.querySelector(this._selecotor).content.querySelector('.post').cloneNode(true);
        this._post = element;
        return this._post;
    }

    _addNewTitle() {
        console.log('add new title');
    }

    _addNewText() {
        console.log('add new text');
    }

    _deleteElement() {
        console.log('delete element');
    }

    _dragAndDrop() {
        console.log('drag me');
    }

    _clickHandler(evt) {
        if (evt.target.classList.contains('post__icons-item_add-title')) {
            this._addNewTitle();
        }
        if (evt.target.classList.contains('post__icons-item_add-text')) {
            this._addNewText();
        }
        if (evt.target.classList.contains('post__icons-item_delete')) {
            this._deleteElement();
        }
        if (evt.target.classList.contains('post__icons-item_drag')) {
            this._dragAndDrop();
        }
    }

    _setEventListeners() {
        this._post.addEventListener('click', (evt) => this._clickHandler(evt))
    }

    generatePost() {
        this._getPostTemplate();
        this._setEventListeners();
        this._post.querySelector('.post__title').textContent = this._title;
        this._post.querySelector('.post__text').textContent = this._text;
        return this._post;
    }
}