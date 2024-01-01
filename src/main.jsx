import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"
import  AppContextProvider  from './context/AppContext.jsx';
import Routes from "./Routes.jsx"
import { Provider } from 'react-redux';
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppContextProvider> */}
    <Provider store={store}>
    <Routes />
    </Provider>
    {/* </AppContextProvider> */}
  </React.StrictMode>,
)
