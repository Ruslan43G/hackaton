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
        const postTitle = document.querySelector(this._titleSelector).content.querySelector('.post__title').cloneNode(true);
        this._postTitle = postTitle;
        this._postTitle.textContent = 'TEST';
        return this._postTitle;
    }

    _getPostTextTemplate() {
        const postText = document.querySelector(this._textSelector).content.querySelector('.post__text').cloneNode(true);
        this._postText = postText;
        this._postText.textContent = 'TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST';
        return this._postText;
    }

    _addNewTitle() {
        this._post.querySelector('.post__title').after(this._getPostTitleTemplate())
    }

    _addNewText() {
        this._post.querySelector('.post__text').after(this._getPostTextTemplate())
    }

    _deleteElement(evt) {
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
            this._deleteElement(evt);
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
        this._post.querySelector(this._textElementSelector).textContent = this._text;
        this._post.dataset.name = this._title;
        return this._post;
    }
}