import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      newName: ""
    };

    this.addPerson = this.addPerson.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/people")
      .then(response => {
        console.log(response);
        this.setState({ people: response.data });
      })
      .catch(err => console.log(err));
  }
  addPerson() {
    axios
      .post("/api/people", { name: this.state.newName })
      .then(response => this.setState({ people: response.data, newName: "" }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {!this.state.people[0] ? (
          <h1> Loading...</h1>
        ) : (
          <List list={this.state.people} />
        )}
        <div>
          <input
            type="text"
            onChange={e => this.setState({ newName: e.target.value })}
            value={this.state.newName}
          />
        </div>
        <button onClick={this.addPerson}>Add Person</button>
      </div>
    );
  }
}

export default App;
