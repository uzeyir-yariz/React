/* eslint-disable react/prop-types */
const ProductItem = ({product}) => {
  const {id, name, price, category} = product;

  return (
    <div id={id} className="card">
      
      <div className="card-header">
        <div className="card-header-title">
          <h1>{name}</h1>
        </div>
      </div>

      <div className="card-content">
        <span>{price}</span>
      </div>

      <div className="card-footer">
        <div className="card-footer-item">
          <span>{category}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
