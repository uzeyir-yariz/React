type dataComing = {
  name: string;
  lastName: string;
  school: string;
  Class: string;
  grade: number[];
  gender: boolean;
}

const Home = (props: dataComing) => {

  const {name, lastName, school, Class, grade, gender} = props;

  return (
    <div>
      <p> Merhaba, sen {name} {lastName} olmalısın! okulun da {school}, değil mi ? ve sanırım sınıfın {Class} değil mi ? ayrıca görüyorum ki sen bir { gender ? "erkek" : "kız" } öğrenicisin</p>      
      <p>oh... notların harika, işte burada</p>
      <ul>
      {
        grade.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
      </ul>
      <p>tebrikler!</p>
    </div>
  )
}

export default Home
