import React from 'react'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { Link } from 'react-router-dom'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.handlerOperations = this.handlerOperations.bind(this)
        this.handlerEditUser = this.handlerEditUser.bind(this)
    }

    handlerOperations() {
        let user_id = this.props.data.user_id;
        this.props.operationsUser(user_id )
    }

    handlerEditUser() {
        let user_id = this.props.data.user_id;
        this.props.editUser(user_id )
    }

    render () {
        return (
            <tr>
                <td>{this.props.data.user_name}</td>
                <td>{this.props.data.user_custom}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.balance}</td>
                <td>{this.props.data.wallet_currency}</td>
                <td className="Operations"><Link to={`/operations/${this.props.data.user_id}`} className="btn btn-default">Operations</Link></td>
                <td className="edit"><Link to={`/edit/${this.props.data.user_id}`}><button className="btn btn-default">Edit User</button></Link></td>
            </tr>
        )
    }
}

export default connect(
    state => ({
        operations: state.operations
    }),
    dispatch => ({
        operationsUser: (user_id) => {
            dispatch({ type: 'LOOK_OPERATIONS', payload: user_id })
        },
        editUser: (user_id) => {
            dispatch({ type: 'EDIT_USER', payload: user_id })
        },

    })
)(User);
