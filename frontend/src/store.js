import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { planListReducer, planDetailsReducer } from "./reducers/planReducers"
import { checkOutReducer } from "./reducers/checkOutReducer"
import { userRegisterReducer } from "./reducers/usersReducer"
// import {plansReducer} from './reducers/plansReducer'
const reducer = combineReducers({
  planList: planListReducer,
  planDetails: planDetailsReducer,
  checkOut: checkOutReducer,
  userRegister: userRegisterReducer
})

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {}

const initialState = {
  checkOut: {
    checkOutDetails: shippingAddressFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
