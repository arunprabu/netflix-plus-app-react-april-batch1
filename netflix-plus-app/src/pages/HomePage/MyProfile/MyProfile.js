import React, { Component } from 'react'

class MyProfile extends Component {
  // JS => JSX
  state = {
    profileName: "john",
  };

  handleProfileNameChange = (event) => {
    // baked event object
    console.log(event);
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h3>Profile Info</h3>
        <p>Update Profile Info</p>
        {/* Controlled Component */}
        {/* An input form element whose value is controlled by React is called as Controlled Component*/}
        <input
          type="text"
          value={this.state.profileName}
          onChange={this.handleProfileNameChange}
        />
        <p>Profile Name: {this.state.profileName}</p>
      </div>
    );
  }
}

export default MyProfile