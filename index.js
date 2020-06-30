import {initialinfo, headerImg, headerTitle, postTitle, postText} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'

console.log(initialinfo);

const renderer = new Section({renderer: (item) => {
    const post = new Post('.template-post', item);
    renderer.addItem(post.generatePost());
}}, 'content')

renderer.renderItems(initialinfo);