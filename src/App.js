import React, { Component } from "react";
import ItemsList from "./Components/ItemsList";
import "./App.css";
import data from "./Components/data";
import OrderTotal from "./Components/OrderTotal";

class App extends Component {
  constructor() {
    super();
    if (!localStorage.getItem("data")) {
      for (let i = 0; i < data.length; i++) {
        data[i]["quantity"] = 1;
      }
      localStorage.setItem("data", JSON.stringify(data));
    }
    this.state = {
      items_list: JSON.parse(localStorage.getItem("data")),
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete_item = this.delete_item.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment = (e) => {
    var index = parseInt(e.target.name);
    var items_list = this.state.items_list;
    items_list[index]["quantity"] = items_list[index]["quantity"] + 1;
    localStorage.setItem("data", JSON.stringify(items_list));
    this.setState({ items_list });
  };
  decrement = (e) => {
    var index = parseInt(e.target.name);
    var items_list = this.state.items_list;
    if (items_list[index]["quantity"] >= 1)
      items_list[index]["quantity"] = items_list[index]["quantity"] - 1;
    localStorage.setItem("data", JSON.stringify(items_list));
    this.setState({ items_list });
  };
  delete_item = (e) => {
    var index = parseInt(e.target.name);
    var items_list = this.state.items_list;
    items_list.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(items_list));
    this.setState({ items_list });
  };
  reset = () => {
    for (let i = 0; i < data.length; i++) {
      data[i]["quantity"] = 1;
    }
    localStorage.setItem("data", JSON.stringify(data));
    this.setState({ items_list: JSON.parse(localStorage.getItem("data")) });
  };
  render() {
    return (
      <div className="App">
        <div className="title-header">
          <span>&lt;</span>Order Summary
        </div>
        <div className="Cart">
          <ItemsList
            items_list={this.state.items_list}
            increment={this.increment}
            decrement={this.decrement}
            delete_item={this.delete_item}
            reset={this.reset}
          />
          <OrderTotal items_list={this.state.items_list} />
        </div>
      </div>
    );
  }
}

export default App;
