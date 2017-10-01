import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.onBtnClickHandlerEdit = this.onBtnClickHandlerEdit.bind(this)
        this.id = (this.props.location.pathname.split('/'))[2]
    }

    onBtnClickHandlerEdit() {
        const user = {
            "user_id": this.id,
            "user_name": this.refs.nameInput.value,
            "user_custom": this.refs.lastNameInput.value,
            "email": this.refs.emailInput.value,
            "balance": this.refs.balanceInput.value
        }
        this.props.onChangeUser(user)
        window.history.back()
    }
    render() {
        const self = this
        const currentUser =  this.props.users.filter(function(element) {
            return element.user_id == self.id
        })[0]
        const templateUserEdit = 
            <div className="col-md-12 edit-form">
                <span>Name:</span>
                <input
                    className='test-input form-control com-md-8'
                    defaultValue={currentUser.user_name}
                    ref='nameInput'
                />
                <span>Lastname:</span>
                <input
                    className='test-input form-control com-md-8'
                    defaultValue={currentUser.user_custom}
                    ref='lastNameInput'
                />
                <span>Email:</span>
                <input
                    className='test-input form-control com-md-8'
                    defaultValue={currentUser.email}
                    ref='emailInput'
                />
                <div className="balance col-md-12">
                    <div className="col-md-6">
                        <div className="col-md-12">Balance</div>
                        <div className="col-md-8 balance-container">
                            <input
                            className='test-input form-control'
                            defaultValue={currentUser.balance}
                            readOnly/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12">Wallet currency</div>
                        <div className="col-md-8 balance-container">
                            <input
                            className='test-input form-control'
                            defaultValue={currentUser.wallet_currency}
                            ref='walletInput'
                            readOnly/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-6 balance-container">
                            <input
                            className='test-input form-control com-md-4'
                            defaultValue=""
                            ref='balanceInput'
                            placeholder="Replenishment of balance"
                        />
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-default btn-save"
                                onClick={this.onBtnClickHandlerEdit.bind(this)}>
                                Save edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        return (
            <div className="app edit-content">
                <div className="page-header">
                    <h1 className="col-md-6">User Edit</h1>
                </div>
               {templateUserEdit}
            </div>
        )
    }
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({
        onChangeUser: (user) => {
            dispatch({ type: 'CHANGE_USER', payload: user})
        }
    })
  )(EditUser);