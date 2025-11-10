import { useState } from "react";
import { createContext } from "react";
import { food_items } from "../../food";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  let [filteredItems, setFilteredItems] = useState(food_items);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCards, setShowCards] = useState(false);

  const data = {
    searchTerm,
    setSearchTerm,
    filteredItems,
    setFilteredItems,
    filterByCategory,
    showCards,
    setShowCards,
  };

  // const [activeCategory, setActiveCategory] = useState("All");

  function filterByCategory(category) {
    if (category === "All") {
      setFilteredItems(food_items);
    } else {
      let newItemList = food_items.filter(
        (item) => item.food_category === category
      );
      setFilteredItems(newItemList);
    }
  }

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
}
