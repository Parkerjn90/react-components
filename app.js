// TODO
var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);


var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem items={['apples', 'bananas']} />
  </div>

);

// GroceryList(['apples', 'bananas']);

// ReactDOM.render(<Apples />, document.)
ReactDOM.render(<GroceryList />, document.getElementById("app"))