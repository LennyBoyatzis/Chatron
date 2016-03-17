import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

export default class FriendsList extends Component {
  render() {
    const { users } = this.props
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <input className="form-control" type="text" placeholder="Search for someone" />
        </li>
        {
          _.map(users, (user, userId) => {
            if (!user) return null
            return (
              <li className="list-group-item" key={ user.username }>
                <img className="img-circle media-object pull-left" src="public/images/heisenburg.jpeg" width="32" height="32" />
                <div className="media-body">
                  <strong>{ user.username }</strong>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
