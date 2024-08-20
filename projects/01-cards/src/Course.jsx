// eslint-disable-next-line react/prop-types
const Course = ({title, description, img}) => {
  // const title = props.title;
  // const description = props.description;

  // const {title, description} = props; 

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by2">
            <img
              src={img}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h1 className="title">{title}</h1>
            </div>
          </div>

          <div className="content">
            <p>{description}</p>            
          </div>
        </div>
      </div>
    </>
  )
}

export default Course;
// üç farklı yazıdrma işlemi var

// react developer toolskit indirebilirsin buradan kullnarak işi kolaylaştırabilirim
/*
  * css kütüphanesi olarak bulma indirdim 
*/