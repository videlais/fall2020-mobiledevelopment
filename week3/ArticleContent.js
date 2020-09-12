const Component = require("./Component.js");

class ArticleContent extends Component {

  constructor(content) {
    this.props = {};
    this.props.component = content;
  }

  render() {
    return `
      <p>${this.props.content}</p>
    `;
  }

}

export default ArticleContent;
