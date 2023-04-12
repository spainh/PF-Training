import axios from 'axios'

// actions
import {
    PLAN_LIST_REQUEST,
    PLAN_LIST_SUCCESS,
    PLAN_LIST_FAIL
} from '../constants/planConstants'

// action creators
export const listPlans = () => async (dispatch) => {
    try {
        dispatch({ type: PLAN_LIST_REQUEST })

        const { data } = await axios.get('/api/plans')

        dispatch({
            type: PLAN_LIST_SUCCESS,
            payload: data

        })
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