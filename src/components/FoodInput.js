import React, { Component } from "react";

class FoodInput extends Component {
  render() {
    //รับค่าจาก handleSubmit หน้า App
    const { handleSubmit, item, handleChange, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Todo</label>
            <input
              type="text"
              className="form-control"
              value={item}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            disabled={item ? false : true} //ถ้าไอเทมเป็นค่าว่างก็จะเป็น false บันทึกข้อมูลไม่ได้
            className={editItem ? "btn btn-primary" : "btn btn-success"} //ถ้าแก้ไขรายการปุ่มจะเป็นสีเขียว
            value={editItem ? "Edit" : "Add"} //ถ้าเป็นจริงขึ้นแก้ไขรายการ
          />
        </form>
      </div>
    );
  }
}
export default FoodInput;
