export default class Post {
    constructor(templateSelectors, textElementSelector, text) {
        this._postSelecotor = templateSelectors.post;
        this._titleSelector = templateSelectors.title;
        this._textSelector = templateSelectors.text;
        this._textElementSelector = textElementSelector;
        this._text = text;
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
        this._postTitle.querySelector('.post__title').textContent = 'TEST';
        return this._postTitle;  
    }

    _getPostTextTemplate() {
        const postText = document.querySelector(this._textSelector).content.querySelector('.post').cloneNode(true);
        this._postText = postText;
        this._postText.addEventListener('click', (evt) => this._clickHandler(evt));
        this._postText.querySelector('.post__text').textContent = 'TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST';
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
        this._post.addEventListener('click', (evt) => this._clickHandler(evt))
    }

    generatePost() {
        this._getPostTemplate();
        this._setEventListeners();
        this._post.querySelector(this._textElementSelector).textContent = this._text;
        // назначает имя по второму слову в тексте (проблема в Статья)
        this._post.dataset.name = this._text.split(' ')[1];
        return this._post;
    }
}