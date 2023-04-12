import {
    PLAN_LIST_REQUEST,
    PLAN_LIST_SUCCESS,
    PLAN_LIST_FAIL
} from '../constants/planConstants'

export const planListReducer = (state = {plans: [] }, action) => {
    switch (action.type){
        case PLAN_LIST_REQUEST:
            return { loading: true, plans: [] }
        case PLAN_LIST_SUCCESS:
            return { loading: false, plans: action.payload }
        case PLAN_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}