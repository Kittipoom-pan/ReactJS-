import React, { Component } from "react";
import FoodList from "./components/FoodList";
import FoodInput from "./components/FoodInput";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    //กำหนดให้ id ไม่ซ้ำกัน
    id: uuid(),
    item: "",
    editItem: false
  };
  //event เมื่อกดปุ่ม submit
  handleSubmit = e => {
    //ไม่ต้องให้มันรีเฟรช
    e.preventDefault();
    const newItem = {
      // ดึงมาจาก state ด้านบน
      id: this.state.id,
      name: this.state.item
    };
    const updateItems = [...this.state.items, newItem]; //โยนค่าไปที่ array items
    this.setState({
      items: updateItems,
      item: "", //เคลียข้อมูลให้เป็นค่าว่าง เมื่อพิมเสร็จ
      id: uuid(),
      editItem: false
    });
  };
  //เมื่อมีการเปลี่ยนแปลงข้อความ
  handleChange = e => {
    this.setState({
      item: e.target.value //เปลี่ยนแปลงค่า state item
    });
  };
  //ลบรายการอาหารทั้งหมด
  clearList = () => {
    this.setState({
      items: [] //ปรับ array รายการอาหารให้เป็นค่าว่าง
    });
  };
  //ลบทีละรายการ
  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id); // ไอดีที่ไม่ตรง
    const selectItem = this.state.items.find(item => item.id == id); //ค้นไอดีที่มีค่าตรงกัน

    this.setState({
      items: filterItems,
      item: selectItem.name, //ส่งชื่อรายการไป
      id: id,
      editItem: true //เปลี่ยนสถานะ false ที่กำหนดจากข้างบน ให้เป็น true ให้สามารถแก้ไขได้
    });
  };
  //เมื่อมีการเปลี่ยนแปลงข้อความ
  handleDelete = id => {
    //ตรวจเช็คค่าไอดีที่ส่งมา ตัวที่มีไอดีเหมือนกันจะลบไป ตัวที่ไม่เหมือนจะถูกเก็บไว้ที่ filterItems .filter กรองไอเทมทุกตัว return กลับมาเป็น array
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems
    });
  };
  render() {
    return (
      <div className="container">
        <br />
        <h1 align="center">Todo list</h1>
        <div className="row">
          <FoodInput
            item={this.state.item} //เก็บรายการอาหาร
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem} //ส่งค่าที่อยู่ใน state ไปด้วย
          />
        </div>
        <FoodList
          //ส่งค่าไป
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
