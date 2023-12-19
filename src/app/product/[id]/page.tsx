import ProductDetailsScreen from "@/Screens/ProductDetails"

const ProductDetails = async ({params}: {params: {id: string}}) => {
  let data;
  try{
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    data = await response.json();
  }catch{

  }
    return (
        <>
          <ProductDetailsScreen id={params.id} productDetails={data} />
        </>
    )
}

export default ProductDetails