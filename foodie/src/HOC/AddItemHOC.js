import React, { Component } from "react";

const AddItemHOC = (PassComponent) => {
  class AddItems extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formVal: {}
      }
    }

    getField = (e) => {
      this.setState(
        (state) => ({
          formVal: {
            ...this.state.formVal,
            [e.target.name]: e.target.value
          }
        }),
        () => { console.log(this.state.formVal, "New"); }
      )
    }

    resetInputs = (e) => {
      let x = {};
      for (let property in this.state.formVal) {
        // console.log(property)
        x[property] = "";
      }
      this.setState({ formVal: x }, () => {
        // console.log(this.state.formVal, "Reset")
      });
    }

    render() {
      return (
        <>
          <PassComponent formVal={this.state.formVal} getFieldVal={(e) => this.getField(e)} resetInputs={this.resetInputs} />
        </>
      )
    }
  }
  return AddItems
}

export default AddItemHOC;
