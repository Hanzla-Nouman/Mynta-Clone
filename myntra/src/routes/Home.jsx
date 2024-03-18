import React from "react";
import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      {items.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default Home;
