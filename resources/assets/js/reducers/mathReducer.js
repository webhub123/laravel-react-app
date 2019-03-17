const mathReducer = (state = {

    result : 1,
    lastValue : []

}, action) => {
    switch(action.type) {

        case 'Add':
            state = {
                ...state,
                result : state.result + action.payload,
                lastValue : [...state.lastValue, action.payload]
            }
            break;

        case 'Multiply':
            state = {
                ...state,
                result : state.result * action.payload,
                lastValue : [...state.lastValue, action.payload]
            }
            break;
    }
    return state;
}

export default mathReducer;