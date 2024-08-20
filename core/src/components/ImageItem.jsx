/* eslint-disable react/prop-types */
const ImageItem = ({ imageSrc, altDescription }) => {
  return (
    <figure>
      <img src={imageSrc} alt={altDescription} />
    </figure>
  );
};

export default ImageItem;
