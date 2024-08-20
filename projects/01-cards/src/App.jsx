import Course from "./Course"; // defult olduğu için {} parantez içine almaya gerek yoktur
import "bulma/css/bulma.css"

function App() {

  const img_1 = "https://picsum.photos/id/31/200/100"
  const img_2 = "https://picsum.photos/id/24/200/100"
  const img_3 = "https://picsum.photos/id/26/200/100"
  const img_4 = "https://picsum.photos/id/65/200/100"

  return (
    <>
      <section className="hero is-link mb-4">
        <div className="hero-body">
          <p className="title">react resimler projesi</p>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column has-bacground-color-black">
            <Course title="resim-1" img={img_1} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio molestiae rerum corporis incidunt repudiandae aperiam autem ipsum, dolor eum esse unde dolores iusto quod fugit. Adipisci sequi labore dolor."/>
          </div>

          <div className="column">
            <Course title="resim-2" img={img_2} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio molestiae rerum corporis incidunt repudiandae aperiam autem ipsum, dolor eum esse unde dolores iusto quod fugit. Adipisci sequi labore dolor."/>
          </div>

          <div className="column">
            <Course title="resim-3" img={img_3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio molestiae rerum corporis incidunt repudiandae aperiam autem ipsum, dolor eum esse unde dolores iusto quod fugit. Adipisci sequi labore dolor."/>
          </div>

          <div className="column">
            <Course title="resim-4" img={img_4} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odio molestiae rerum corporis incidunt repudiandae aperiam autem ipsum, dolor eum esse unde dolores iusto quod fugit. Adipisci sequi labore dolor."/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
