const Component = require("./Component.js");
class ArticleTitle extends Component{



    constructor(props) {
      super(props);
    }
  
    render() {
      return `<h1>${this.props.title}</h1>`;
    }
  
  }

  export default ArticleTitle;