// Import Component
var Component = require('Component');
var Component = require('./Component');

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, text) {
    // Send what it gets to its parent object
  this.title = title;
  this. author = author;
  this. text = text;
  
  
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>this.props.title</Title>
        <Author>this.props.author</Author>
        <Text>this.props.text</Text>
      </Article>
    `
    );
    
  }

}

export default Article;
