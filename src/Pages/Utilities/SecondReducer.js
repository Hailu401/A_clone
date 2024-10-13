
import { Type } from './ActionType'


export const initialState = {
    Basket: []
}



export const secondReducer = (state, action) => {
    switch (action.Type) {
        case Type.STORE_TO_BASKET:
            return {
                ...state,
                Basket: [...state.Basket, action.item]

            }
            
            
    
        default:
            return state;
            break;
    }
}