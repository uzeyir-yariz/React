import "bulma/css/bulma.css"
import { useState } from "react"
import { SearchHedaer } from "./SearchHedaer"
import { ImagesLists } from "./components/ImagesLists"
import api from "./Api"

function App() {
  const [images, setImages] = useState([])

  const handleSearch = async (term) => {
    const result = await api(term);
    console.log(result)
    setImages(result);
  }

  return (
    <>
      <SearchHedaer search={handleSearch} />
      <ImagesLists imagesPlaceholder={images}/>
    </>
  )
}

export default App
