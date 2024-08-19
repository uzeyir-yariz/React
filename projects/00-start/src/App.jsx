function App() {

  const user_name = "üzeyir";
  const user_surname = "yarız";
  const isRight = true;

  return (
    <>
      <h1>first react</h1>
      <article>
        <p>{user_name} {user_surname}</p>
        <p> {isRight ? "doğru" : "yanlış"} </p>
      </article>
    </>
  )
}

export default App

/*
  * açıklama : 

  projede üç sabit değişken kullanıldı user_name, user_surname ve isRight bunları return <></> JSX fragmentlerin içinde kullandım bir başlık kullandım
  ilk <p> etiketine {} JSX değişkeni ekleme ile değişkenleri ekledim 
  sonra <p> etiketinde ise inline if else kullandım `(değişken) ? [doğru] : [yanlış]` olarak kullandım 
*/ 