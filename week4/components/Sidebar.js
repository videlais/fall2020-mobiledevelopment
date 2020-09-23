import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    responseHTML = responseHTML + '<ul>';

    this.props.menu.forEach( (item) => {

      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      responseHTML = responseHTML + '<li>${item}</li>';
    });
    responseHTML += '</ul>';
    
    return responseHTML;
  }
}

export default Sidebar;
