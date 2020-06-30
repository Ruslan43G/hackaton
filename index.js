
import TextEditor from './scripts/TextEditor.js';
import {initialinfo, headerImg, headerTitle, postTitle, postText, post} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'
import Header from './scripts/Header.js';

console.log(initialinfo);

const header = new Header(initialinfo[0], {title: '.header__title', img: '.header__img'});
header.setValues()


const renderer = new Section({renderer: (item) => {
    if ('title' in item && 'text' in item) {
        const title = new Post(
            {post: '.template-post',
            title: '.template-title',
            text: '.template-text'}, '.post__title', item.title,);

        renderer.addItem(title.generatePost());

        const text = new Post(
            {post: '.template-post',
            title: '.template-title',
            text: '.template-text'}, '.post__text', item.text,);
        renderer.addItem(text.generatePost());   
    }
    console.log(item);
}}, 'content')

renderer.renderItems(initialinfo);

const textEditor = new TextEditor(post);
textEditor.getLocalText();
textEditor.handleKeyListener();
