import React, { Component } from "react";

export default class PlayerModal extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h4>Add a player</h4>
        </div>
        <div className="card-body">Enter data...</div>
        <div className="card-footer">
          <button className="btn btn-warning m-1" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-success m-1">Save changes</button>
        </div>
      </div>
    );
  }
}
