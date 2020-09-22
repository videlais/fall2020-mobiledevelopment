//Import Component
import Component from './Component.js';

//Sidebar is a child object of Component
class Sidebar extends Component {

  constructor (props) {
    //Send what it gets to its parent object
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      <ul>
        <li>${this.props.menu() + responseHTML}</li>
      </ul>

    });

    return responseHTML;
  }
}

export default Sidebar;
