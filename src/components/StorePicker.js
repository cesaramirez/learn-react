import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  storeName = React.createRef();

  goToStore = e => {
    e.preventDefault();
    const name = this.storeName.current.value;

    this.props.history.push(`/store/${name}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.storeName}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
