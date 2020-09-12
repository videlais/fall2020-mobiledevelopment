const Component = require("./Component.js");
class ArticleTitle extends Component{



    constructor(title) {
      this.props = {};
      this.props.title = title;
    }
  
    render() {
      return `<h1>${this.props.title}</h1>`;
    }
  
  }

  export default ArticleTitle;