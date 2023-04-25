import React, {useState} from 'react';
import './App.js';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light";

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;