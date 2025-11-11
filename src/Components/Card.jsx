import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { RiKnifeBloodLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice.js";
import { toast } from "react-toastify";

function Card({ name, price, type, image, id }) {
  let dispatch = useDispatch();
  return (
    <div className="bg-white w-[300px] h-[400px] p-3 rounded-md flex flex-col gap-1.5 shadow-md m-2 hover:scale-105 duration-300">
      <div className="w-full h-[60%] overflow-hidden rounded-md flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md transition-transform duration-300"
        />
      </div>

      <div className="text-lg font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-semibold">Rs. {price}/-</div>
        <div className="flex items-center gap-2 text-lg font-semibold">
          {type === "veg" ? (
            <GiThreeLeaves className="text-green-500" />
          ) : (
            <RiKnifeBloodLine className="text-red-700" />
          )}
          <span
            className={`${type === "veg" ? "text-green-500" : "text-red-700"}`}
          >
            {type}
          </span>
        </div>
      </div>

      <button
        className="w-full bg-amber-400 p-3 font-semibold m-auto hover:bg-green-500"
        onClick={() => {
          dispatch(AddItem({id:id, name:name, price:price, type:type, image:image, qty:1}));
          toast.success(`${name} added to cart!`)
        }
      }
      >
        Add to Wish
      </button>
    </div>
  );
}

export default Card;
