import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'

export default class FriendsList extends Component {
  render() {
    const { users } = this.props
    return (
      <ul className="people">
        {
          _.map(users, (user, userId) => {
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
