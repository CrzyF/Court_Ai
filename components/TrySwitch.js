import React, { Component } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

class TrySwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (

<label htmlFor="small-radius-switch">
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    handleDiameter={28}
    offColor="#08f"
    onColor="#ffff"
    offHandleColor="#2A3CA0"
    onHandleColor="#08f"
    height={40}
    width={90}
    borderRadius={16}
    activeBoxShadow="0px 0px 1px 2px #fffc35"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "white",
          paddingRight: 2
        }}
      >
        Dark
      </div>
    }
    checkedIcon={
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "black",
          paddingRight: 2
        }}
      >
        Light
      </div>
    }
    uncheckedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 20
        }}
      >
        <FontAwesomeIcon icon={faMoon} />
      </div>
    }
    checkedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "yellow",
          fontSize: 18
        }}
      >
        <FontAwesomeIcon icon={faSun}/>
      </div>
    }
    className="react-switch"
    id="small-radius-switch"
  />
</label>

);
}
}

export default TrySwitch