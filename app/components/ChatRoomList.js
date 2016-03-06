import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class ChatRoomList extends Component {
  render() {
    const { users, loggedInUser } = this.props
    return (
      <ul className="people" >
        {
          _.map(users, (user, userId) => {
            if (loggedInUser.user.userId === userId) return null
            return (
              <Link to={ `/chat/users/${userId}` } key={ user.username } >
                <li className="person" data-chat="person1">
                  <img src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                  <span className="name">{ user.username }</span>
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
