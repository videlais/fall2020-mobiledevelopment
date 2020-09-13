import ReactDOM from 'react-dom';

// Import Article
import Article from './Article'

// Pass the values to the constructor method of Article
const a = new Article({
    title: "This is the title!",
    author: "Me",
    text: "This is an example article!"
});

// Shows its HTML on the console
console.log(a.render());

ReactDOM.render(a.render(), document.querySelector('#root'));