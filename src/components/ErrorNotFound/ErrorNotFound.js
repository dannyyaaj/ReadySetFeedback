import React, { Component } from 'react'

class ErrorNotFound extends Component {

  // redirect user to home page
  goHome = () => this.props.history.push('/');

  render() {
    console.log();
    return (
      <div>
        <h1>404</h1>
        <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
        <button onClick={this.goHome}>Home Page</button>
      </div>
    )
  }
}
export default ErrorNotFound
