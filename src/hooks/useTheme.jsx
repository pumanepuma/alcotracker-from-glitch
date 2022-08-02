import { useContext } from "react"
import { ThemeContext } from "../providers/ThemePovider"

export const useTheme = () => {
    const value = useContext(ThemeContext)
    return value
}