import React from "react";
import { toast } from "react-toastify";

function BillPrint({ subtotal, deliveryFee, taxes, total }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full h-[150px] mt-3 border-t-1 border-b-1 p-2 flex flex-col gap-4 text-lg">
        <div className="flex justify-between items-center px-[30px] ">
          <div className="font-semibold">Subtotal</div>
          <div className="font-semibold">Rs.{subtotal}/-</div>
        </div>

        <div className="flex justify-between items-center px-[30px] ">
          <div className="font-semibold">Delivery Fee</div>
          <div className="font-semibold">Rs.{deliveryFee}/-</div>
        </div>

        <div className="flex justify-between items-center px-[30px] ">
          <div className="font-semibold">Taxes</div>
          <div className="font-semibold">Rs.{taxes}/-</div>
        </div>
      </div>

      <div className="w-full h-[50px] mt-1 border-b-1 p-2 flex flex-col gap-4 text-lg">
        <div className="flex justify-between items-center px-[30px] ">
          <div className="font-semibold">Total</div>
          <div className="font-semibold">Rs.{total}/-</div>
        </div>
      </div>

      <button
        className="w-[85%] bg-amber-300 border-1 p-3 font-semibold mt-3 rounded-lg hover:bg-amber-400"
        onClick={()=> toast.success("Order Placed Successfully....")}
      >
        Place Order
      </button>
    </div>
  );
}

export default BillPrint;
