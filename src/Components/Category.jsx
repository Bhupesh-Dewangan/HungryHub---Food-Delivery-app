import React from "react";
import CategoryList from "./Category_object";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function Category() {
  const filter = useContext(FilterContext);
  return (
    <div className="w-full h-[100px] flex justify-center items-center gap-7 mt-3">
      {CategoryList.map((item) => (
        <div
          key={item.name}
          className="w-[80px] h-[80px] bg-white flex justify-center items-center flex-col rounded-md shadow-md text-[15px] gap-0.5 cursor-pointer hover:scale-110 duration-300"
          onClick={() => filter.filterByCategory(item.name)}
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Category;
