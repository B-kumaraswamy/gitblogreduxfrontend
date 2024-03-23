const initialState = {
    id : 0
} 

const incrementReducer = (state2 = initialState, action) => {
    console.log('increment reducer', state2.id)
    switch(action.type) {
        case 'increment':
            return {
                ...state2,
                id : state2.id + 1
            }
            default:
                return state2
    }
}

export default incrementReducer;