import ImageItem from "./ImageItem"

/* eslint-disable react/prop-types */
export const ImagesLists = ({imagesPlaceholder}) => {
  return (
    <div className="galary">
      {imagesPlaceholder.map((img, index) => {
        return <ImageItem key={index} imageSrc={img.urls.regular} altDescription={img.alt_description}/>
      })}
    </div>
  )
}
