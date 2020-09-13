import Component from './Component.js';

class Article extends Component {
  constructor() {
    super();
    doSomething();
  }
 } 

  render() ;{
    return (`
      <Article>
        <Title>this.props.title</Title>
        <Author>this.props.author</Author>
        <Text>this.props.text</Text>
      </Article>
    );
  }

export default Article;