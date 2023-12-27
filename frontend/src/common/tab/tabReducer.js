const initialState = {
    selected: '',
    visible: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case 'TAB_SELECTED':
            return {
                ...state,
                selected: action.payload
            }

        case "TAB_SHOWED":
            return {
                ...state,
                visible: action.payload
            }
            
        default:
            return state
    }
}