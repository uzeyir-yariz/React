import ProductItem from "./ProductItem"

/* eslint-disable react/prop-types */
const ProductsList = ({productsList}) => {
  console.log(productsList);
  return (
    <div className="custom-product-list">
      {
        productsList && productsList.map((product, index) => {
          return <ProductItem key={index} product={product} />
        })
      }
    </div>
  )
}

export default ProductsList
