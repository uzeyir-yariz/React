type RequestProprs = {
  status: "success" | "loading" | "error";
}

const Request = (props:RequestProprs) => {
  const {status} = props;
  let mesage = "";

  if(status === "success"){
    mesage = "başarılı"
  } else if(status === "loading"){
    mesage = "yükleniyor..."
  } else if(status === "error"){
    mesage = "hata"
  }

  return (
    <div>
      {mesage}
    </div>
  )
}

export default Request
