// ***Imports Article Children (title, text, & author)... author is optional
const Component = require("./Component.js")
const ArticleTitle = require("./ArticleTitle.js")
const ArticleText = require("./ArticleText.js")
const ArticleAuthors = require("./ArticleAuthors.js")



// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    // Send what it gets to its parent object
    super(props);
    this.props.title = new ArticleTitle({
      title: this.props.title
    });

    this.props.authors = new ArticleAuthors({
      title: this.props.title
    });

    this.props.text = new ArticleText({
      title: this.props.title
    });

  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
      <Article>
        ${this.props.title.render()}
        ${this.props.authors.render()}
        ${this.this.props.text.render()}
      </Article>
    `;
        
  }

}

// export default Article;
module.exports = Article;
