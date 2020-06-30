import {initialinfo, headerImg, headerTitle, postTitle, postText} from '../scripts/constants.js';
import Section from '../scripts/Section.js';
import Post from './scripts/Post.js'

const testObject = {
    title: 'Тест',
    text: 'lorem ipsum что-то там в общем этот текст рыба, lorem ipsum что-то там в общем этот текст рыба, lorem ipsum что-то там в общем этот текст рыба'
}

const renderer = new Section({renderer: () => {
    const post = new Post('.template-post', testObject);
    renderer.addItem(post.generatePost());
}}, 'content')

renderer.renderItems([testObject]);