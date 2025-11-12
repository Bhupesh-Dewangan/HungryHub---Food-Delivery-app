import React from "react";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, IncrementQty } from "../redux/cartSlice.js";
import { RemoveItem } from "../redux/cartSlice.js";
import { ImBin } from "react-icons/im";
import { BiLogoLess } from "react-icons/bi";
import BillPrint from "./BillPrint.jsx";
import { DecrementQty } from "../redux/cartSlice.js";

function OrderCard({ name, price, type, image, id, qty }) {
  let dispatch = useDispatch();
  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[150px] shadow-md border-t-2 border-green-500 flex bg-white rounded-lg overflow-hidden mb-2">
      <div className="w-[70%] h-full p-2 flex gap-3">
        <div className="w-[50%] h-full overflow-hidden rounded-md flex-shrink-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between items-center w-[50%] pt-[5px] pb-[15px]">
          <div className="text-[18px] font-semibold ">{name}</div>
          <div className="flex border border-green-500 rounded-md overflow-hidden h-[40px] w-[80%] ">
            <button className="w-[30%] h-full flex items-center justify-center text-lg font-semibold text-black hover:bg-green-100 transition-colors"
            onClick={() => dispatch(DecrementQty(id))}>
              -
            </button>
            <span className="w-[40%] h-full bg-green-500 text-white flex items-center justify-center text-lg font-semibold">
              {qty}
            </span>
            <button className="w-[30%] h-full flex items-center justify-center text-lg font-semibold text-black hover:bg-green-100 transition-colors"
            onClick={() => dispatch(IncrementQty(id))}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-[30%] h-full pr-[20px] bg-white rounded-md justify-around">
        <span className="text-xl font-semibold text-gray-800">
          Rs. {price}/-
        </span>
        <span
          className={`text-lg font-medium ${
            type === "veg" ? " text-green-600" : "text-red-600"
          }`}
        >
          {type}
        </span>
        <button
          className="text-red-600 hover:text-red-800 transition-colors duration-200 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        >
          <ImBin className="w-[25px] h-[25px]" />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
