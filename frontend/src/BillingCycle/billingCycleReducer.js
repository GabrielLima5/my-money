const initialState = {
    list: []
}

export default function billingCycleReducer(state = initialState, action){
    switch(action.type){
        case "BILLING_CYCLES_FETCHED":
            return {
                ...state,
                list: action.payload.data
            }

        default:
            return state
    }
}