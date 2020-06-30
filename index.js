
import TextEditor from './scripts/TextEditor.js';
import {initialinfo, headerImg, headerTitle, postTitle, postText, post} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'
import Header from './scripts/Header.js';

console.log(initialinfo);

const header = new Header(initialinfo[0], {title: '.header__title', img: '.header__img'});
header.setValues()


const renderer = new Section({renderer: (item) => {
    const post = new Post('.template-post', item);
    renderer.addItem(post.generatePost());
}}, 'content')

renderer.renderItems(initialinfo);

const textEditor = new TextEditor(post);
textEditor.getLocalText();
textEditor.handleKeyListener();
