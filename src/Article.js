import React from "react";

// Import Component
import Component from "./Component";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h3>Title - {this.props.children}</h3>
    )
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h3>Text - {this.props.children}</h3>
    )
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h3>Author - {this.props.children}</h3>
    )
  }
}

// Article is a child object of Component
class Article extends Component {
  constructor(props) {
    // Send what it gets to its parent object
    super(props);
  }
  render() {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    const title = new Title({
      children: "hello"
    })
    return (
      <div style={{ border: "2px solid red", padding: "20px", width: '21%' }}>
        <Title>{this.props.title}</Title>
        <Author>{this.props.author}</Author>
        <Text>{this.props.text}</Text>
      </div>
    )
  }
}

export default Article;