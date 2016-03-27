import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        {this.props.children}
      </div>
    )
  }
}
