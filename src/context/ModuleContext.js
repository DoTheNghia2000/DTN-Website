import { createContext, useReducer, useState } from "react";
import reducers from "./ModuleReducer";

export const DarkModeContext = createContext();
export const LoadingContext = createContext();
export const MenuContext = createContext();


export const DarkModeContextProvider = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(prevState => !prevState);
   }

   return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   )
}

export const LoadingContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducers.LoadingReducer, 'LOADPAGE');

   const [loading, setLoading] = useState(false);

   const toggleLoading = () => {
      setLoading(prevState => !prevState);
   }

   return (
      <LoadingContext.Provider value={{ loading, toggleLoading, typeLoading: state, dispatch }}>
         {children}
      </LoadingContext.Provider>
   )
}

export const MenuContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducers.MenuReducer, 'HOME');

   const handleItemMenu = (values) => {
      dispatch({ type: values });
   }

   return (
      <MenuContext.Provider value={{ typeMenu: state, handleItemMenu }}>
         {children}
      </MenuContext.Provider>
   )
}
