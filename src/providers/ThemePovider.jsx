import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({isPink:false})

export const ThemeProvider = ({children}) => {
    const [isPink,setIsPink] = useState(() => {
        const saved = localStorage.getItem('isPink')
        const initialValue = JSON.parse(saved)
        return initialValue || false
    })
    const value = useMemo(() => ({isPink,setIsPink}),[isPink])
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}