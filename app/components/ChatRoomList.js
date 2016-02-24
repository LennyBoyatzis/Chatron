import React, { Component } from 'react'
import _ from 'lodash'
const PEOPLE = [1,2,3,4,5]

export default class FriendsList extends Component {
  render() {
    const { users } = this.props
    return (
      <ul className="people">
        {
          _.map(users, (person) => {
            return (
              <li key={person.name} className="person" data-chat="person1">
                <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                <span className="name">{ person.name }</span>
                <span className="time">{ person.time }</span>
                <span className="preview">{ person.preview }</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
