import React, { Component } from 'react'
const PEOPLE = [1,2,3,4,5]

export default class FriendsList extends Component {
  render() {
    return (
      <ul className="people">
        {
          PEOPLE.map((person) => {
            return (
              <li key={person} className="person" data-chat="person1">
                <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                <span className="name">Thomas Bangalter</span>
                <span className="time">2:09 PM</span>
                <span className="preview">I was wondering...</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
