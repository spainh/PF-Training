import { CHECKOUT_SAVE_SHIPPING_ADDRESS } from "../constants/CheckOutConstants"

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CHECKOUT_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}