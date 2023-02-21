import { createContext, useState } from 'react';
import './App.css';
import Main from './Pages/Main/Main';

export const ThemeContext = createContext(null)

function App() {

  const [theme , setTheme] = useState("Dark");

  const toggleTheme = () => {

    if(theme === "Dark")
    {
        setTheme("Light")
    }
    else 
    {
        setTheme("Dark")
    }
}

  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <div className="App" id={theme}>
      <Main />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
