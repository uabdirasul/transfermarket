import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      players: [],
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

  render() {
    return (
      <div>
        <h1>Hey there</h1>
      </div>
    );
  }
}
