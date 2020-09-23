import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      <ul>
        <li value="1">'Albert Eggstein',</li>
        <li>'Attila the Hen',</li>
        <li>'Attila the Hen',</li>
        <li>'Dixie Chick',</li>
        <li>'Gregory Peck',</li>
        <li>'Mary Poopins'</li>
      </ul>
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;
