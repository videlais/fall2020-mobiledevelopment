// Import Component
const Component = require('./Component.js').default;
const ArticleTitle = require("./ArticleTitle.js");
const ArticleContent = require("./ArticleContent.js");

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    // Send what it gets to its parent object
    super(props);
    this.props.title = new ArticleTitle(
      {
        title: this.props.title
      });

      this.props.content = new ArticleContent(
        {
          content: this.props.content
        });
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return `
      <Article>
        <Title> ${this.props.title} </Title>
        <Author> ${this.props.author} </Author>
        <Text> ${this.props.content} </Text>
      </Article>`;
    
  }

}

export default Article;
