export const initState={
    // showSidebar:false,
    cart:[],
    count:0,
    total:0
}

export const AppReducer=(state,action)=>{
    switch(action.type){
        case "TOGGLE_SIDEBAR":{
            return {...state,showSidebar:!state.showSidebar}
        }
        case "ADD_TO_CART":{
            return {...state,cart:[...state.cart,action.payload]}
        }
        case "INCREASE_QUANTITY":{
            // const modifiedCart=state.cart.map((item)=>item.id === action.payload ? {...item,quantity:item.quantity+1} : item)
            const modifiedCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                else {
                    return item
                }
            })

            return { ...state, cart: modifiedCart }
        }
           

        case "DECREASE_QUANTITY":{
            const modifiedCart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                else {
                    return item
                }
            })
            return { ...state, cart: modifiedCart }
        }
          
            
        case "REMOVE_FROM_CART" :{
            const modifiedCart = state.cart.filter((item) => item.id !== action.payload)
            return { ...state, cart: modifiedCart }
        }
        case "CHANGE_QUANTITY":{
            const modifiedCart = state.cart.map((item)=>{
                if(item.id === action.payload.id) {
                    return {...item,quantity:item.quantity + action.payload.num}
                }
                else{
                    return item
                }
            })

            return {...state,cart:modifiedCart}
        }
        case "UPDATE_COUNT_TOTAL":{
            const count = state.cart.reduce((acc,curr)=>acc+curr.quantity,0)
            const total = state.cart.reduce((acc,curr)=>acc+(curr.quantity * curr.price),0).toFixed(2)
            return {...state,count,total}
        }
           
        default:{
            return state
        }
    }

    
}