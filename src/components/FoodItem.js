import React, { Component } from "react";

class FoodItem extends Component {
  render() {
    //รับค่า props
    const { name, handleDelete, handleEdit } = this.props;
    // ทำให้เป็น list item
    return (
      // my-2 ให้มันห่าง
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{name}</h6>
        <div>
          {/* mx-3 ให้ปุ่มห่างกัน */}
          <span onClick={handleEdit} className="mx-3 text-primary">
            <i className="fas fa-edit"></i>
          </span>
          <span onClick={handleDelete} className="text-danger">
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      </li>
    );
  }
}
export default FoodItem;
