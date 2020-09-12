const Component = require("./Component.js");

class ArticleContent extends Component {

  constructor(content) {
    this.props = {};
    this.props.content = content;
  }

  render() {
    return `
      <p>${this.props.content}</p>
    `;
  }

}

export default ArticleContent;
