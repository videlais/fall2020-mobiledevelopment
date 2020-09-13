const Component = require("./Component.js");

class ArticleText extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return `
        <p>${this.props.text}</p>
      `;
    }
  
  }
  
  module.exports = ArticleText;