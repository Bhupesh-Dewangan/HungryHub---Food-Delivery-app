import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

function CardContainer() {
  const filter = useContext(FilterContext);

  if (!filter.filteredItems || filter.filteredItems.length === 0) {
    return (
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-full h-dvh text-center">
          <div className=" text-2xl text-gray-500 mb-2">
            No items found
          </div>
          <div className="text-lg text-gray-400">
            Try selecting a different category
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-wrap justify-center items-center mt-5 pb-10 gap-2">
      {filter.filteredItems.map((item) => (
        <Card
          key={item.id}
          name={item.food_name}
          id={item.id}
          price={item.price}
          type={item.food_type}
          image={item.food_image}
        />
      ))}
    </div>
  );
}

export default CardContainer;
