import React, { Component, PropTypes } from 'react'

const FRIENDS = [1,2,3,4,5]

export default class FriendsList extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-header">
          <input className="form-control" type="text" placeholder="Search for someone" />
        </li>
        {
          FRIENDS.map((friend) => {
            return (
              <li className="list-group-item" key={ friend }>
                <img className="img-circle media-object pull-left" src="public/images/heisenburg.jpeg" width="32" height="32" />
                <div className="media-body">
                  <strong>List item title</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
