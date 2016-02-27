import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class FriendsList extends Component {
  render() {
    const { users, loggedInUser } = this.props
    console.log("Here is our loggedInUser", loggedInUser)
    console.log("Here are our users", users)
    return (
      <ul className="people" >
        {
          _.map(users, (user, userId) => {
            if (loggedInUser.userId === userId) return null
            return (
              <Link to={ `/chat/users/${userId}` } key={ user.name } >
                <li className="person" data-chat="person1">
                  <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                  <span className="name">{ user.name }</span>
                  <span className="time">{ user.time }</span>
                  <span className="preview">{ user.preview }</span>
                </li>
              </Link>
            )
          })
        }
      </ul>
    )
  }
}
