const INITIAL_STATE = {
    credit: 0,
    debit: 0
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case "BILLING_SUMMARY_FETCHED":
            return {
                ...state,
                credit: action.payload.data.credit,
                debit: action.payload.data.debit
            }

        default:
            return state
    } 
}