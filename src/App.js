import React, { Component } from "react";
import PlayerModal from "./components/PlayerModal";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
      modalVisibility: false,
      currentData: "",
    };
  }

  componentDidMount() {
    const players = [
      {
        firstName: "Messi",
        age: 35,
        club: "Barcelona FC",
        value: 160,
      },
      {
        firstName: "Ronaldo",
        age: 37,
        club: "Al Nasr FC",
        value: 200,
      },
      {
        firstName: "Sadio Mane",
        age: 29,
        club: "Bayern Munich FC",
        value: 60,
      },
      {
        firstName: "Maguire",
        age: 31,
        club: "Manchester United",
        value: 999,
      },
      {
        firstName: "Neymar",
        age: 31,
        club: "PSG",
        value: 222,
      },
    ];
    this.setState({
      players,
    });
  }

  removePlayer = (index) => {
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };

  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : {
          firstName: "none",
          age: 0,
          club: "none",
          value: 0,
        };

    if (type === "age") {
      if (isInc) {
        newCurrentData.age++;
      } else if (newCurrentData.age < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.age--;
      }
    } else if (type === "value") {
      if (isInc) {
        newCurrentData.value++;
      } else if (newCurrentData.value < 1) {
        newCurrentData.age = 0;
      } else {
        newCurrentData.value--;
      }
    }

    this.setState({
      currentData: newCurrentData,
    });
  };

  saveChanges = () => {
    const { players, currentData } = this.state;
    players.push(currentData);
    currentData.firstName = "Player";
    this.setState({ players, modalVisibility: false });
  };

  clearCurrentData = () => {
    this.setState({
      currentData: "",
    });
  };

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="market">
        <div className="container">
          <h1>Transfer Market</h1>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary mb-1" onClick={this.openModal}>
                Add a player
              </button>
              {modalVisibility ? (
                <PlayerModal
                  closeModal={this.closeModal}
                  currentData={currentData}
                  changeCurrentData={this.changeCurrentData}
                  saveChanges={this.saveChanges}
                  clearCurrentData={this.clearCurrentData}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-hover table-sm">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.firstName}</td>
                      <td>{item.age}</td>
                      <td>{item.club}</td>
                      <td>
                        <span className="badge text-bg-primary">
                          €{item.value}.00m
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.removePlayer(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
