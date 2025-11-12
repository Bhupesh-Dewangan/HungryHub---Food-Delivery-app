import React, { useContext, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { FilterContext } from "../Context/FilterContext.jsx";
import { food_items } from "../../food.js";
import { useSelector } from "react-redux";

function Nav() {
  let items = useSelector((state) => state.cart);
  let {
    searchTerm,
    setSearchTerm,
    filteredItems,
    setFilteredItems,
    setShowCards,
    showCards,
  } = useContext(FilterContext);

  useEffect(() => {
    let newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(newList);
  }, [searchTerm]);

  return (
    <div className="w-full h-25 bg-slate-300 flex items-center justify-between ">
      <div className="w-[70px] h-[70px] m-4 bg-white flex items-center justify-center rounded-md shadow-md">
        <IoFastFoodOutline className="w-[30px] h-[30px] text-green-500 " />
      </div>

      <form
        className="bg-white w-[70%] h-[60px] flex items-center px-5 gap-5 rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[20px] h-[20px] text-green-400" />
        <input
          type="text"
          placeholder="Search Food Items....."
          className="w-[100%] outline-none text-[17px]"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>

      <div
        className="w-[70px] h-[70px] m-4 bg-white flex items-center justify-center rounded-md shadow-md relative transition-all duration-300 cursor-pointer hover:scale-110"
        onClick={() => setShowCards(true)}
      >
        <FaCartPlus className="w-[30px] h-[30px] text-green-500" />
        <span className="absolute top-0.5 right-1.5 text-green-500 font-semibold">
          {items.length}
        </span>
      </div>
    </div>
  );
}

export default Nav;
