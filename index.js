
import LocalStorage from './scripts/LocalStorage.js';
import {initialinfo, headerImg, headerTitle, postTitle, postText, post, popup, mainImage, images} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'
import Header from './scripts/Header.js';
import ListServise from './scripts/ListServise.js';
import Popup from './scripts/Popup.js'

console.log(initialinfo);

const popupAvatar = new Popup(popup, mainImage, images);
mainImage.addEventListener('click', () => popupAvatar.open());

const header = new Header(initialinfo[0], {title: '.header__title', img: '.header__img'});
header.setValues()

const newApi = new LocalStorage('dataInfo');
const localInfo = new ListServise(newApi);
console.log(newApi);

const renderer = new Section({renderer: (item) => {
    if ('title' in item && 'text' in item) {
        const title = new Post(
            {post: '.template-title',
            title: '.template-title',
            text: '.template-text'}, '.post__title', item.title);

        renderer.addItem(title.generatePost());
        if (!localInfo.find(item.id)) {
        localInfo.create(item);};

        const text = new Post(
            {post: '.template-text',
            title: '.template-title',
            text: '.template-text'}, '.post__text', item.text);
        renderer.addItem(text.generatePost());   
        
    }
    console.log(item);
}}, 'content');

renderer.filterRenderer(initialinfo, newApi.getItem('dataInfo'));



