import React, { Component } from "react";

export class Main extends Component{
  render() {
    const { children } = this.props
    return (
      <div className='main'>
        {children}
      </div>
    )
  }
}

export default Main;