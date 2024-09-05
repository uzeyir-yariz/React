/* eslint-disable react/prop-types */
const Book = ({
  id,
  author,
  country,
  imageLink,
  language,
  pages,
  title,
  year,
}) => {
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={imageLink}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle">{author}</p>
          </div>
        </div>

        <div className="content">
          <p>
            dil : {language}
            <br />
            ülke : {country}
            <br />
            sayfa sayısı : {pages}
          </p>
          <br />
          <time dateTime={year}>yıl : {year}</time>
        </div>
      </div>
    </div>
  );
};

export default Book;
