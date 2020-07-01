
import LocalStorage from './scripts/LocalStorage.js';
import {initialinfo, headerImg, headerTitle, postTitle, postText, post} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'
import Header from './scripts/Header.js';
import ListServise from './scripts/ListServise.js';

const header = new Header(initialinfo[0], {title: '.header__title', img: '.header__img'});
header.setValues()

<<<<<<< HEAD
=======
const newApi = new LocalStorage('dataInfo');
const localInfo = new ListServise(newApi);
console.log(newApi);

>>>>>>> 5f87c31d25c7c2fadfdb74dbe7c3558c597c7c10
const renderer = new Section({renderer: (item) => {
    // если объект содержит ключи тайтл и текст
    if ('title' in item && 'text' in item) {
        //отрисовывем пост с тайтлом из ключа тайтл
        const title = new Post(
            {post: '.template-title',
            title: '.template-title',
<<<<<<< HEAD
            text: '.template-text'}, '.post__title', item.title,);
        renderer.addItem(title.generatePost());
        //отрисовывем пост с текстом из ключа текст
        const text = new Post(
            {post: '.template-text',
            title: '.template-title',
            text: '.template-text'}, '.post__text', item.text,);
        renderer.addItem(text.generatePost());      
    }
}}, 'content')
renderer.renderItems(initialinfo);
=======
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

>>>>>>> 5f87c31d25c7c2fadfdb74dbe7c3558c597c7c10
