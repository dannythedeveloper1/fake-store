import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cartTypes";

const initialState = {
    items:[],
}
const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:            
            return {
                ...state,items:action.payload
            };
        case REMOVE_PRODUCT:            
            return {
                ...state,items:action.payload
            };
        default:
           return state;
    }
}

export default cartReducer
