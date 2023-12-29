import { createContext, useEffect, useReducer } from "react";
import { AppReducer, initState } from "../reducer/reducer";

export const AppContext = createContext(null)

function AppContextProvider({children}){

    const storedState = JSON.parse(localStorage.getItem("burgerState"));
    const initialState = storedState || initState
    const [state, dispatch] = useReducer(AppReducer,initialState)
    console.log(state);

    // useEffect(()=>{
    //     dispatch({
    //         type:"UPDATE_COUNT_TOTAL"
    //     })
    // },[state.cart])


    useEffect(()=>{
        localStorage.setItem("burgerState",JSON.stringify(state));
    },[state])
  
    return <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    
}

export default AppContextProvider