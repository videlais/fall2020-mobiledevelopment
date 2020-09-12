const Component = require("./Component.js");

class ArticleContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return `
      <p>${this.props.content}</p>
    `;
  }

}

export default ArticleContent;
