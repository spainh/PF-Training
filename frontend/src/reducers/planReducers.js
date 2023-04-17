// actions
import {
  PLAN_LIST_REQUEST,
  PLAN_LIST_SUCCESS,
  PLAN_LIST_FAIL,
  PLAN_DETAILS_REQUEST,
  PLAN_DETAILS_SUCCESS,
  PLAN_DETAILS_FAIL,
} from "../constants/planConstants"

// reducers take in a state and an action
export const planListReducer = (state = { plans: [] }, action) => {
  switch (action.type) {
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

export const planDetailsReducer = (state = { plan: {} }, action) => {
  switch (action.type) {
    case PLAN_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PLAN_DETAILS_SUCCESS:
      return { loading: false, plan: action.payload }
    case PLAN_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


