import React, { Component} from "react";

class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store :rocket:</button>
      </form>
    );
  }
}

export default StorePicker;
