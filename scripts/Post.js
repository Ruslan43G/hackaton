export default class Post {
    constructor(templateSelectors, textElementSelector, text, onfocusCallback, onblurCallback) {
        this._postSelecotor = templateSelectors.post;
        this._titleSelector = templateSelectors.title;
        this._textSelector = templateSelectors.text;
        this._textElementSelector = textElementSelector;
        this._text = text;
        this._onfocus = onfocusCallback;
        this._onblur = onblurCallback;
    }

    _getPostTemplate() {
        const element = document.querySelector(this._postSelecotor).content.querySelector('.post').cloneNode(true);
        this._post = element;
        return this._post;
    }

    _getPostTitleTemplate() {
        const postTitle = document.querySelector(this._titleSelector).content.querySelector('.post').cloneNode(true);
        this._postTitle = postTitle;
        this._postTitle.addEventListener('click', (evt) => this._clickHandler(evt));
        this._postTitle.querySelector('.post__title').onfocus = (evt) => this._onFocus(evt);
        this._postTitle.querySelector('.post__title').onblur = (evt) => this._onBlur(evt);
        this._postTitle.querySelector('.post__title').textContent = 'Новый заголовок';
        return this._postTitle;  
    }

    _getPostTextTemplate() {
        const postText = document.querySelector(this._textSelector).content.querySelector('.post').cloneNode(true);
        this._postText = postText;
        this._postText.addEventListener('click', (evt) => this._clickHandler(evt));
        this._postText.querySelector('.post__text').onfocus = (evt) => this._onFocus(evt);
        this._postText.querySelector('.post__text').onblur = (evt) => this._onBlur(evt);
        this._postText.querySelector('.post__text').textContent = 'Новый абзац';
        return this._postText;
    }

    _addNewTitle(evt) {
        evt.target.closest('.post').after(this._getPostTitleTemplate())
    }

    _addNewText(evt) {
        evt.target.closest('.post').after(this._getPostTextTemplate())
    }

    _deleteElement(evt) {
        evt.target.closest('.post').remove();
    }

    _dragAndDrop(evt) {
        console.log('drag me');
    }

    _onBlur(evt) {
        this._onblur();
    }

    _onFocus(evt) {
        this._onfocus();
    }

    _clickHandler(evt) {
        if (evt.target.classList.contains('post__icons-item_add-title')) {
            this._addNewTitle(evt);
        }
        if (evt.target.classList.contains('post__icons-item_add-text')) {
            this._addNewText(evt);
        }
        if (evt.target.classList.contains('post__icons-item_delete')) {
            this._deleteElement(evt);
        }
        if (evt.target.classList.contains('post__icons-item_drag')) {
            this._dragAndDrop(evt);
        }
    }

    _setEventListeners() {
        this._post.addEventListener('click', (evt) => this._clickHandler(evt));
        this._post.querySelector(this._textElementSelector).onfocus = (evt) => this._onFocus(evt);
        this._post.querySelector(this._textElementSelector).onblur = (evt) => this._onBlur(evt);
        // this._post.addEventListener('keydown', (evt) => {
        //   console.log(evt);
        //   this.callbackFunc(evt);});
    }

    generatePost() {
        this._getPostTemplate();
        this._setEventListeners();
        this._post.querySelector(this._textElementSelector).textContent = this._text;
        // назначает имя по второму слову в тексте (проблема в Статья)
        return this._post;
    }
}