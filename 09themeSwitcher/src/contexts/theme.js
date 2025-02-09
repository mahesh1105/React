import { useContext, createContext } from "react";

// Creating the Context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// Taking the reference of the ThemeContext Provider
export const ThemeProvider = ThemeContext.Provider

// Custom Hook useTheme() that allows other components to access the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}