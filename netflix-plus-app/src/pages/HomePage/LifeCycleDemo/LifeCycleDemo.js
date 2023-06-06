// rce
import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  constructor() {
    // optional to have constructor
    super(); // must call super -- because we inherit Component class
    console.log("========== 1. Inside constructor =============");

    // ideal place for your initial component-wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: "",
    };
  }

  // lifecycle hook / method
  componentDidMount() {
    console.log("========= 3. Inside componentDidMount =========");
    // this method will be executed ONLY ONCE after initial rendering
    // this method will be called when the component's UI comes into view
    // this is the ideal place for you to send REST API Calls

    // after fetching the data from REST API backend, update the state
    // mocking the REST API call using timeout 
    setTimeout( () => {
      // upon successful res
      this.setState({
        isLoading: false,
        isError: false,
        featureName: "Understanding LifeCycle Hooks in Detail",
      });

      // upon getting an error 
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      //   featureName: ''
      // });
    }, 5000);
  }

  // let's decide whether the re-rendering to happen or not 
  shouldComponentUpdate(nextProps, nextState) {
    console.log("======== 4. Inside shouldComponentUpdate =========");
    // when the state is updated -- this will be called
    // it must either return true or false
    // compare the prevState (this.state) and nextState
    // if changes found, then return true else return false
    console.log(this.state);
    console.log(nextState);
    return true;
  }

  // whether the re-rendering is over or not
  componentDidUpdate( prevProps, prevState) {
    console.log("======== 6. Inside componentDidUpdate ========");
    // called immediately after update in JSX (after re-rendering)
    // will NEVER be called after initial rendering
    // ideal place for tiny dom manupulations like style updates
    document.getElementById('myPara').style.color = 'green';
  }

  render() {
    // render method will be called immediately -- Initial Rendering
    // render will be called after setState is called
    console.log("========= 2 & 5 Inside Render =============");

    if(this.state.isLoading) {
      return (
        <div className="spinner-border text-success" role="status"></div>
      );
    }

    if(this.state.isError){
      return(
        <div className='alert alert-danger'>Some error occurred! Try again later!!</div>
      )
    }

    return (
      <div>
        <h3>LifeCycleDemo</h3>
        <p id="myPara">Feature we are learning: {this.state.featureName}</p>
      </div>
    );
  }
}

export default LifeCycleDemo