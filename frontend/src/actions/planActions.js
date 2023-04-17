import axios from 'axios'

// actions
import {
    PLAN_LIST_REQUEST,
    PLAN_LIST_SUCCESS,
    PLAN_LIST_FAIL,
    PLAN_DETAILS_REQUEST,
    PLAN_DETAILS_SUCCESS,
    PLAN_DETAILS_FAIL,
} from '../constants/planConstants'

// action creators
// dispatch allows us to dispatch the functions above
export const listPlans = () => async (dispatch) => {
    try {
        // pass in request function
        dispatch({ type: PLAN_LIST_REQUEST })

        // get data from route
        const { data } = await axios.get('/api/plans')

        // get success response and display the data through success function
        dispatch({
            type: PLAN_LIST_SUCCESS,
            payload: data

        })
        // error? dispatch the error message as an oject through fail function
    } catch (error) {
        dispatch({
            type: PLAN_LIST_FAIL,
            // return backend error message
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }

}

export const listPlanDetails = (id) => async (dispatch) => {
    try {
        // pass in request function
        dispatch({ type: PLAN_DETAILS_REQUEST })

        // get data from route
        const { data } = await axios.get(`/api/plans/${id}`)

        // get success response and display the data through success function
        dispatch({
            type: PLAN_DETAILS_SUCCESS,
            payload: data

        })
        // error? dispatch the error message as an oject through fail function
    } catch (error) {
        dispatch({
            type: PLAN_DETAILS_FAIL,
            // return backend error message
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        })
    }

}