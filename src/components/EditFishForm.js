import React, { Component } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {
  handleChange = event => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
          onChange={this.handleChange}
          value={price}
        />
        <select name="status" ref={this.statusRef} selected={status}>
          <option value="available"> Fresh! </option>
          <option value="unavailable"> Sold Out! </option>
        </select>{" "}
        <textarea
          name="desc"
          ref={this.descRef}
          placeholder="Desc"
          onChange={this.handleChange}
          value={desc}
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
          onChange={this.handleChange}
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
