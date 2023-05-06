import React, { Component } from "react";

export default class PlayerModal extends Component {
  constructor(props) {
    super();
  }

  changeCurrentData = (type, isInc) => {
    this.props.changeCurrentData(type, isInc);
  };

  saveChanges = () => {
    this.props.saveChanges();
  };

  componentWillUnmount() {
    this.props.clearCurrentData();
  }

  render() {
    const { closeModal, currentData } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h4>Add a player</h4>
        </div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-5">
              <h5>Player's age:</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeCurrentData("age", false)}
                >
                  -
                </button>
                <button className="btn">
                  {currentData ? currentData.age : 0}
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("age", true)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://cdn11.bigcommerce.com/s-mzx05o3/images/stencil/1280x1280/products/1522/7852/united_attire_football_referee_jersey_-_2_inches__55958.1656251904.jpg?c=2"
                alt="jersey"
              />
            </div>
            <div className="col-5">
              <h5>Player's value</h5>
              <div className="btn-group">
                <button
                  className="btn btn-secondary"
                  onClick={() => this.changeCurrentData("value", false)}
                >
                  -
                </button>
                <button className="btn">
                  €{currentData ? currentData.value : 0}.00m
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => this.changeCurrentData("value", true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning m-1" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-success m-1" onClick={this.saveChanges}>
            Save changes
          </button>
        </div>
      </div>
    );
  }
}
