import React, { Component } from "react";
import { reviews } from "./components/data";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: reviews,
      currentReview: 0,
    };
  }
  handleNextBtn = () => {
    if (this.state.currentReview >= this.state.data.length - 1) {
      this.setState({ currentReview: 0 });
    } else {
      this.setState({ currentReview: this.state.currentReview + 1 });
    }
  };
  handlePrevBtn = () => {
    if (this.state.currentReview <= 0) {
      this.setState({ currentReview: this.state.data.length - 1 });
    } else {
      this.setState({ currentReview: this.state.currentReview - 1 });
    }
  };
  handleSurpriseBtn = () => {
    let randomNumber = Math.floor(Math.random() * this.state.data.length);
    this.setState({ currentReview: randomNumber });
  };
  render() {
    const { data, currentReview } = this.state;
    const access = data[currentReview];
    console.log(data);
    return (
      <React.Fragment>
        <div className="container">
          <h1>Our reviews</h1>
          <div className="reviews">
            <img className="image" src={access.img} alt="image" />
            <h3 className="name">{access.name}</h3>
            <h4 className="job">{access.job}</h4>
            <p className="text">{access.text}</p>
            <div>
              <button className="next-btn" onClick={this.handlePrevBtn}>
                Previews
              </button>
              <button className="next-btn" onClick={this.handleNextBtn}>
                Next
              </button>
            </div>

            <button className="surprise-btn" onClick={this.handleSurpriseBtn}>
              Surprise me
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
