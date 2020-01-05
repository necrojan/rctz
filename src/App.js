import React, { Component } from "react";
import "./App.css";

import api from "./components/api";
import Collection from "./components/collection";
import Cuisines from "./components/cuisines";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: [],
      cuisines: []
    };

    this.collections = this.collections.bind(this);
    this.cuisines = this.cuisines.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.collections({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
      this.cuisines({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  }

  collections(params) {
    api
      .get("/collections", { params: params })
      .then(res => {
        this.setState({ collections: res.data.collections });
        console.log(res.data.collections);
      })
      .catch(e => console.log(e));
  }

  cuisines(params) {
    api
      .get("/cuisines", { params: params })
      .then(res => {
        this.setState({ cuisines: res.data.cuisines });
        console.log(res.data.cuisines);
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron></Jumbotron>
          <Collection collections={this.state.collections}>
            Collection
          </Collection>
          <Cuisines cuisines={this.state.cuisines}>Cuisines</Cuisines>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
