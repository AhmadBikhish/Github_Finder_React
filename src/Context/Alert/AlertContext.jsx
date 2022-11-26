import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {

    const initalState = null;
    const [state, dispatch] = useReducer(AlertReducer, initalState);

    const setAlert = (msg, type) => {
        dispatch({ type: 'SET_ALERT', payload: { msg, type } });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: null }) , 3000);
    }

    return (
        <AlertContext.Provider value={{ alert: state, setAlert }}>
            { children }
        </AlertContext.Provider>
    )
} 

export { AlertProvider };
export default AlertContext;