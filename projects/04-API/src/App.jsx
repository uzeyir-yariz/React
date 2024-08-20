import "bulma/css/bulma.css"
import { Search } from "./components/Search"
import { useState } from "react"
import GetApi from "./components/GetApi"
import { ImageList } from "./components/ImageList"

function App() {

  const [Images, setImages] = useState([])

  const handleSearch = async (term) => {
    const result = await GetApi(term);
    setImages(result);
  }

  return (
    <>
      <Search SearchValue={handleSearch}/>
      <ImageList imagePlaceholder={Images}/>
    </>
  )
} 

export default App
