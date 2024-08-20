/* eslint-disable react/prop-types */
const ItemImage = ({imgSource, description}) => {
  return (
    <figure>
      <img src={imgSource} alt={description} />
    </figure>
  )
}

export default ItemImage
