const initialData = {
    cartData: 0,
}

export const CartReducer = (state={initialData}, action)=>{

    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartData
                
            }

        default:
            return state.cartData

    }
}


