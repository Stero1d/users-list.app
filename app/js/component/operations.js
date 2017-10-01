import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Operations extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            queryParams: this.props.location.pathname,
            userOperations: []
        }
    }
    render() {
        const queryParams = this.state.queryParams
        const id = (queryParams.split('/'))[2]
        this.props.operations.map((item, index) => {
            if(item.user_id === id) {
                this.state.userOperations.push(item.operations)
            }
        })
        const templateOperations = this.state.userOperations[0].map((operation, index) => 
            <div className="col-md-12 operations" key={index}>
                <div className="col-md-4">{operation.operation}</div>
                <div className="col-md-4">{operation.data}</div>
                <div className="col-md-4">{operation.summa}</div>
            </div>
        )
        
        return (
            <div className="app content">
                <div className="page-header">
                    <h1 className="col-md-6">Operations of User</h1>
                </div>
               {templateOperations}
               <div><Link to={`/`} className="btn btn-default btn-operations">Back</Link></div>
            </div>
        )
    }
}
export default connect(
    state => ({
        operations: state.operations
    }),
    dispatch => ({})
  )(Operations);