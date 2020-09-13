const Component = require("./Component.js");

// Article is a child object of Component
class Article extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>Debugging</Title>
        <Author>Morgan Prenitzer</Author>
        <Text>Glad I got this finished.</Text>
      </Article>
    `
    );
    
  }

}

module.exports = Article;
