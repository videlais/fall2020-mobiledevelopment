export default Component;

// Component is the parent
class Component {

  // ***Constructor with props & state as arguments
  constructor (props, state) {
    this.props = props;
    this.state = state;
  }

  // ***Set or inititialize state of object
  setState(thing) {
    this.state = thing;
  }
  
  render () {
    // Child objects define their own render() methods
  }
}

module.exports = Component;
