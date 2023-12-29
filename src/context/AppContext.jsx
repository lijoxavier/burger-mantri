import { createContext, useReducer } from "react";
import { AppReducer, initState } from "../reducer/reducer";

export const AppContext = createContext(null)

function AppContextProvider({children}){
    const [state, dispatch] = useReducer(AppReducer,initState)
    console.log(state);
  
    return <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    
}

export default AppContextProvider