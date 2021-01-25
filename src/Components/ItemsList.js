import React, { Component } from "react";
import "./ItemsList.css";

class ItemsList extends Component {
  constructor() {
    super();
    this.state = {
      show_message: false,
    };
  }
  flash_message = () => {
    this.setState({ show_message: true });
    setTimeout(() => {
      this.setState({ show_message: false });
    }, 700);
  };
  on_delete = (e) => {
    this.props.delete_item(e);
    this.flash_message();
  };
  render() {
    var totalItems = this.props.items_list.length;
    var items = this.props.items_list.map((item, i) =>
      item.quantity >= 0 ? (
        <li>
          <div className="left-div">
            <div>
              <div
                className="foto-div"
                style={{
                  backgroundImage: "url(" + item.img_url + ")",
                }}
              ></div>
              <div>{item.name}</div>
            </div>

            <button onClick={this.on_delete}>X</button>
          </div>
          <div className="middle-div">
            <button name={i} onClick={this.props.decrement}>
              -
            </button>
            <input type="text" readOnly value={item.quantity}></input>
            <button name={i} onClick={this.props.increment}>
              +
            </button>
          </div>
          <div className="right-div">${item.price}</div>
        </li>
      ) : null
    );
    return (
      <div className="items-div">
        {this.state.show_message ? (
          <div className="item-deleted">Item Deleted</div>
        ) : null}
        <div className="header">
          <li className="left-li">Items({totalItems})</li>
          <li className="middle-li">Quantitity</li>
          <li className="right-li">Price</li>
        </div>
        {this.props.items_list.length > 0 ? (
          <div className="items-list-div">{items}</div>
        ) : (
          <button className="reload-button" onClick={this.props.reset}>
            Reload
          </button>
        )}
      </div>
    );
  }
}

export default ItemsList;
