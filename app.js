// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

// new GroceryListItem.constructor(['apples', 'bananas'])


var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.groceryItems.map(item =>
        <GroceryListItem item={item} />
        )}
    </ul>
  </div>
);

// GroceryList(['apples', 'bananas']);

// ReactDOM.render(<Apples />, document.)
ReactDOM.render(<GroceryList groceryItems={['apples', 'bananas']}/>, document.getElementById("app"))