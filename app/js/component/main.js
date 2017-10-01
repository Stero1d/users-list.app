import React from 'react'
import FormInput from './form'
import { connect } from 'react-redux'
import UsersList from './users-list'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsers = this.handleUsers.bind(this);
        this.state = {newUser: []}
    }
      
    handleUsers(item) {
         this.setState({newUser: item});
    }

    render() {
        return (
            <div className="app content">
                <div className="page-header">
                    <h1 className="col-md-6">List of Users</h1>
                </div>
                <FormInput onUsersChange={this.handleUsers}/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>balance</th>
                            <th>wallet</th>
                        </tr>
                    </thead>
                    <UsersList />
                </table>
            </div>
        )
    }
}
