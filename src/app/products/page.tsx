"use server"

import Products from "@/Screens/Products";


const AllProductsScreen = async () =>{
  let products;
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    products = data.products;
  }
  catch{
    products = null
  }
  return (
    <>
    <Products products={products} />
    </>
  )

}

export default AllProductsScreen