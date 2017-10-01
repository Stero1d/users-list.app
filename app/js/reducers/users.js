function getClone(object) {
    return JSON.parse(JSON.stringify(object))
}

export default function reducer(state = [], action) {
    if (action.type == 'ADD_USERS') {
        return action.payload
    }
    if (action.type == 'ADD_USER') {
        const newState = getClone(state)
        newState.push(action.payload[0])
        return newState
    }   
    if (action.type == 'CHANGE_USER') {
        const user = action.payload
        console.log('eeee')
        console.log(user)
        const newState = getClone(state)
        newState.forEach(function(element) {
            if (element.user_id == user.user_id) {
                element.user_name = user.user_name
                element.user_custom = user.user_custom
                element.email = user.email
                element.balance = (+element.balance) + (+user.balance)
            }
        })
        return newState
    }   
    return state
}
