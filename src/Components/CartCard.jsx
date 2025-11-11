import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext.jsx";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard.jsx";
import { AddItem } from "../redux/cartSlice.js";
import { useDispatch } from "react-redux";
import BillPrint from "./BillPrint.jsx";

function CartCard() {
  let { setShowCards } = useContext(FilterContext);
  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="w-[40vw] h-[100%] bg-white fixed top-0 right-0 shadow-lg transition-all duration-300 overflow-auto">
      <header className="flex items-center justify-between p-4">
        <span className="text-xl font-semibold text-green-500">Order List</span>
        <RxCross1
          className="w-[25px] h-[25px] text-green-500 cursor-pointer"
          onClick={() => setShowCards(false)}
        />
      </header>

      <div>
        {items.map((item) => (
          <OrderCard
            key={item.id}
            name={item.name}
            price={item.price}
            type={item.type}
            image={item.image}
            id={item.id}
            qty={item.qty}
          ></OrderCard>
        ))}
      </div>

      <div>{
        items.length > 0 ?
        <BillPrint
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          taxes={taxes}
          total={total}
        ></BillPrint> : <div className="w-full h-[50vh] flex justify-center items-center text-gray-500 font-semibold text-lg">Your cart is empty</div>
      }
      </div>
    </div>
  );
}

export default CartCard;
