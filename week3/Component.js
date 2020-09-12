// Component is the parent
class Component {
  constructor (props, state) {
    this.props = props;
    this.state = state;
  }

  setState(object) {
    this.state = object;
  }

  render () {
    // Child objects define their own render() methods
  }
}

export default  Component;
