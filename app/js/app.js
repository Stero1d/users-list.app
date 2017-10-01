import React from 'react'
import { connect } from 'react-redux'
import Main from './component/main'


class App extends React.Component {
    render() {
        if (!this.props.users) {
            return (
                <p>Подождите идет загрузка</p>
            )
        }
        return (
            <Main />
        )
    }
}

export default connect(
    state => ({
        users: state.users
    }),
    dispatch => ({})
  )(App);
