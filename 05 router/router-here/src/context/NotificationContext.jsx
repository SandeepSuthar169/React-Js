import {createContext, useContext, useState, useEffect} from "react";

const NotificationContext = createContext()

export function NotificationContext({children}){
    const [count, setCount] = useState(0)

    const addNotification = () => {
        setCount((prev) => prev + 1)
    }

    const resetNotification = () => {
        setCount(0)
    }


    return (
        <NotificationContext.Provider 
        value={{count, addNotification, resetNotification}}
        >
            {children}
        </NotificationContext.Provider>
    )
}


// custom hook

export function NotificationContext(){
    return useContext(NotificationContext)
}