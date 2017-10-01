import { combineReducers } from 'redux'
import users from './users'
import operations from './operations'

export default combineReducers({
    users,
    operations
})