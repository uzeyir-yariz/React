type dataComing = {
  name: string;
}

const Home = (props: dataComing) => {

  const {name} = props;

  return (
    <div>
      <p> merhaba {name} ! </p>      
    </div>
  )
}

export default Home
