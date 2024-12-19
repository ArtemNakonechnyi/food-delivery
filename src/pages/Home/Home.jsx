import { useState } from "react";
import Header from "../../components/Header/Header";
import MenuSet from "../../components/MenuSet/MenuSet";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDowload/AppDownload";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <MenuSet category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
