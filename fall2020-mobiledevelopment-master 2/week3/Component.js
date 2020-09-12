// Component is the parent
class Component {
  constructor (title, author, text) {
    this.title = title;
    this. author = author;
    this. text = text;
  }

  render () {
    // Child objects define their own render() methods
  }
}

export default Component;
