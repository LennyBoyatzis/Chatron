import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router'
import { Glyph } from 'elemental'
import CurrentUserInfo from './CurrentUserInfo'

export default class ChatRoomList extends Component {
  render() {
    const { users, loggedInUser, toUser } = this.props
    return (
      <div>
        <ul className="people" >
          <li className="people__header">

            <Glyph icon="person"/><span className="people__headline">Currently Online</span>
          </li>
          {
            _.map(users, (user, userId) => {
              if (loggedInUser.user.userId === userId) return null
              return (
                <Link to={ `/chat/users/${userId}` } key={ user.username } >
                  <li className={`person ${userId === toUser.userId ? 'active' : '' }` }>
                    <span className="person__logo">{ user.username.charAt(0) }</span>
                    <span className="name">{ user.username }</span>
                    <span className="time">{ user.time }</span>
                    <span className="preview">{ user.preview }</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        <CurrentUserInfo loggedInUser={ loggedInUser }/>
      </div>
    )
  }
}
