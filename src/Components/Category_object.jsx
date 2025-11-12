import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdDinnerDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const CategoryList = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 2,
    name: "Breakfast",
    icon: <MdOutlineFreeBreakfast className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 3,
    name: "Soups",
    icon: <TbSoupFilled className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 4,
    name: "Pasta",
    icon: <CiBowlNoodles className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 5,
    name: "Main",
    icon: <MdDinnerDining className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 6,
    name: "Pizza",
    icon: <GiFullPizza className="w-[45px] h-[45px] text-green-500"/>,
  },

  {
    id: 7,
    name: "Burger",
    icon: <GiHamburger className="w-[45px] h-[45px] text-green-500"/>,
  },
];
export default CategoryList;
