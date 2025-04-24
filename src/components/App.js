import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

// Mock data for items
const items = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Carrots", category: "Produce" },
  { id: 3, name: "Ice Cream", category: "Dessert" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
