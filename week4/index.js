import Sidebar from './components/Sidebar.js';

render () = new Sidebar({
  menu: [
    <ul>
      <li>'Albert Eggstein',</li>
      <li>'Attila the Hen',</li>
      <li>'Attila the Hen',</li>
      <li>'Dixie Chick',</li>'
      <li>'Gregory Peck',</li>
      <li>'Mary Poopins'</li>
    </ul>
  ]
});

/* 
  TODO: Use the render() method of Sidebar to show HTML response on console. Results should be wrapped in <ul></ul>
  
  The final result should look like the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/
console.log();
