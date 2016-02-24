import React, { Component, PropTypes } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

// {
//   messages: {
//     '1': [
//       { from: '1' msg: 'hi dude'},
//       { from: '0' msg: 'how are you goin'},
//       { from: '1' msg: 'good thanks'}
//     ],
//     '2': [
//       { from: '2' msg: 'hi dude'},
//       { from: '2' msg: 'hi dude'},
//       { from: '2' msg: 'hi dude'}
//     ]
//   },
//   users: {
//     '2': {
//       name: 'nick'
//     },
//     '1': {
//       name: 'bob'
//     },
//     '0': {
//       name: 'lenny'
//     }
//   },
//   routeParams: {
//     userId: '2'
//   }
// }
