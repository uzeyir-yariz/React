import ItemImage from "./ItemImage"

/* eslint-disable react/prop-types */
export const ImageList = ({imagePlaceholder}) => {
  return (
    <div className="galary">
      {
        imagePlaceholder.map((item, index) => {
          return <ItemImage imgSource={item.urls.regular} description={item.description} key={index} />
        })
      }
    </div>
  )
}
