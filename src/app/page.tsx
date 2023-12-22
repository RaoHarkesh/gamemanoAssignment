"use server";

import HomePage from "@/Screens/Home";

const HomeScreen = async () => {
  let products;
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
  } catch {
    products = null;
  }
  return (
    <>
      <HomePage products={products} />
    </>
  );
};

export default HomeScreen;
