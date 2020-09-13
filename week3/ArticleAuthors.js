const Component = require("./Component.js");

class ArticleAuthors extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return `<h1>${this.props.authors}</h1>`;
  }

}

module.exports = ArticleAuthors;