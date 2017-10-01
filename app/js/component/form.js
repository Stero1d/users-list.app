import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            nameIsEmpty: true,
            lastNameIsEmpty: true,
            emailIsEmpty: true,
            walletIsEmpty: true
        }
        this.onBtnClickHandler = this.onBtnClickHandler.bind(this)
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.nameInput).focus()
    }

    onBtnClickHandler(e) {
        let name = this.refs.nameInput.value,
            lastName = this.refs.lastNameInput.value,
            email = this.refs.emailInput.value,
            wallet = this.refs.walletInput.value

        const item = [{
            user_id: (new Date().getTime() + ''),
            user_name: name,
            user_custom: lastName,
            email: email,
            register_wallet: (new Date() + ''),
            balance: "0",
            wallet_amount: "RUB",
            wallet_currency: wallet,
            enabled: true
        }]
        this.props.onAddUser(item)
    }

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({[''+fieldName]:false})
        } else {
            this.setState({[''+fieldName]:true})
        }
    }

    render() {
        const nameIsEmpty = this.state.nameIsEmpty,
        lastNameIsEmpty = this.state.lastNameIsEmpty,
        emailIsEmpty = this.state.emailIsEmpty,
        walletIsEmpty = this.state.walletIsEmpty

        return (
            <div className="form">
                <input
                    className='test-input form-control com-md-2'
                    defaultValue=''
                    ref='nameInput'
                    onChange={this.onFieldChange.bind(this, 'nameIsEmpty')}
                    placeholder='Name'
                />
                <input
                    className='test-input form-control com-md-2'
                    defaultValue=''
                    ref='lastNameInput'
                    onChange={this.onFieldChange.bind(this, 'lastNameIsEmpty')}
                    placeholder='last name'
                />
                <input
                    className='test-input form-control com-md-2'
                    defaultValue=''
                    ref='emailInput'
                    onChange={this.onFieldChange.bind(this, 'emailIsEmpty')}
                    placeholder='Email'
                />
                <input
                    className='test-input form-control com-md-2'
                    defaultValue=''
                    ref='walletInput'
                    onChange={this.onFieldChange.bind(this, 'walletIsEmpty')}
                    placeholder='wallet'
                />

                <button  
                className="btn btn-default com-md-2" 
                onClick={this.onBtnClickHandler.bind(this)}
                disabled={nameIsEmpty || lastNameIsEmpty || emailIsEmpty || walletIsEmpty}>
                Add User
                </button>
            </div>
        )
    }
}

export default connect(
    state => ({
        users: state.data
    }),
    dispatch => ({
        onAddUser: (userName) => {
            dispatch({ type: 'ADD_USER', payload: userName })
        }
    })
)(FormInput);