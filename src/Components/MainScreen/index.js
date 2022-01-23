import React, { Component, Fragment } from "react";
import "./index.css";
import backgroundImage from "../../Images/Background.png";
import logo from "../../Images/logo.png";

class AgeCalculator extends Component {
  constructor() {
    super();
    //State starts here
    this.state = {
      dob: "",
      Age: "0",
      Category: " --- ",
    };
    //State ends here
  }

  getDateValue(event) {
    console.log(event);
    console.log(event.target.value);
  }

  /*  onsubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  } */

  calculateAge(event) {
    event.preventDefault();
    const userDOB = new Date(this.state.dob);
    const today = new Date();

    const msDiff = today - userDOB;
    const age = Math.floor(msDiff / (365.25 * 24 * 60 * 60 * 1000));

    this.setState({ Age: age });
    console.log(this.state.Age);

    if (age < 5) {
      this.state.Category = "Baby";
    } else if (age < 8 && age >= 5) {
      this.state.Category = "Child";
    } else if (age < 17 && age > 9) {
      this.state.Category = "Teenage";
    } else if (age < 30 && age > 18) {
      this.state.Category = "Young";
    } else if (age < 60 && age > 30) {
      this.state.Category = "Adult";
    } else if (age > 60) {
      this.state.Category = "Senior";
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <img
            className="backgroundImage"
            alt="background image"
            src={backgroundImage}
          />
          <div className="content">
            <img className="logo" src={logo} alt="logo image" />
            <p className="title">Age Calculator</p>
            <p className="text">
              Just enter your birth of date and you will get your type...
            </p>

            <form>
              <input
                className="userAge"
                type="date"
                min="1980   -01-01"
                max="2022-12-31"
                placeholder="Your birth of date..."
                onChange={(event) => this.setState({ dob: event.target.value })}
              ></input>
              <button
                onClick={(event) => this.calculateAge(event)}
                className="Calculate"
              >
                Calculate
              </button>
            </form>

            <div className="results">
              <p className="age">Your Age: {this.state.Age}</p>
              <p className="age">Your Category:{this.state.Category}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AgeCalculator;
