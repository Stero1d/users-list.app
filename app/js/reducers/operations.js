export default function reducer(state = [], action) {
    if (action.type == 'ADD_OPERATIONS') {
        return action.payload
    }
    return state
}
