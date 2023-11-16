import React, { Component } from "react";
import "./App.css";
import image from "./image2.webp";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Bamigbade Joel",
        bio: "Self-motivated and cheerful with years of experience in fast-paced working environment. Hardworking team-player with expertise in completing various organizational tasks and offering staff support. Responsible, punctual and productive professional when working with little to no supervision.",
        imgSrc: image,
        profession: "Full-stack Web Developer",
      },
      show: true,
      timeInterval: new Date(),
    };
  }

  componentDidMount() {
    // Capture the moment when the component was mounted
    this.setState({
      timeInterval: new Date(),
    });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="app">
        <h1>My Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Seek Profile"}
        </button>

        {show && (
          <div className="card">
            <h2>{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
            <img style={{ width: "25rem", height: "25rem", borderRadius: "200px" }} src={imgSrc} alt={fullName} />
          </div>
        )}

        <p>Time since mount: {timeInterval.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;