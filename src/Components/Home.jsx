import React from "react";
import Nav from "./Nav";
import Category from "./Category";
import CardContainer from "./CardContainer";
import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext.jsx";
import CartCard from "./CartCard.jsx";
import OrderCard from "./OrderCard.jsx";

function Home() {
  let { searchTerm, showCards, setShowCards } = useContext(FilterContext);

  return (
    <div className="w-full h-full bg-slate-200">
      <Nav />
      {!searchTerm ? <Category /> : null}
      <CardContainer></CardContainer>

      {showCards && <CartCard></CartCard>}
    </div>
  );
}

export default Home;
