const BigPage = () => {

  const image_arr = [];
  for (let index = 0; index < 100; index++) {
    image_arr.push(
      <img 
        loading="lazy" 
        key={index} 
        alt={`random picture ${index}`}
        title={`random picture ${index}`}
        src={`https://picsum.photos/200/200?image=${index}`}/>
    )
  }


  return (
    <div>
      <h2 className="subtitle">büyük veriler</h2>
      {image_arr}
    </div>
  )
}

export default BigPage
