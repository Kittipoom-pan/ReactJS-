import React, { Component } from "react";
import user from "../data/user.json";

class question1 extends Component {
  render() {
    return (
      <div>
        {user.map((detail, index) => {
          return (
            <div>
              <p>
                {detail.name} want to buy
                {detail.cars}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default question1;
