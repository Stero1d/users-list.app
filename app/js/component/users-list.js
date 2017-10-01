import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import User from './user'

class UserList extends React.Component {
    render() {
        console.log(this.props.users)
        const listItems = this.props.users.map((user, index) =>
          <User data={user} key={index} id= {user.user_id}/>
        )
        return (
            <tbody>
               {listItems}
            </tbody>
        )
    }
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({})
  )(UserList);

