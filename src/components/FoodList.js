import React, { Component } from "react";
import FoodItem from "./FoodItem";

export default class FoodList extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;
    return (
      <ul className="list-group my-4">
        <h5>Todo list</h5>
        {/* loop ข้อมูล */}
        {items.map(item => {
          return (
            <FoodItem
              key={item.id}
              name={item.name}
              handleDelete={() => handleDelete(item.id)} //ส่งค่าไอดีไปด้วย
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button className="btn btn-danger font-weight-bold" onClick={clearList}>
          Clear list
        </button>
      </ul>
    );
  }
}
