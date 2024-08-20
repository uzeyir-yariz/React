# note

> axios adlı bir program benzeri bir şey kurdum

```bash
npm install axios
```

**dipnot : input'tan veri alırken boşluk olmaması gerekiyor!**

---

## app.js

```jsx
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
```

## SearchHeader.jsx

```jsx
/* eslint-disable react/prop-types */
import { useState } from "react"

export const SearchHedaer = ({search}) => {
  const [valueInput, setValueInput] = useState("")

  const handleSubmitForm = (e) => {
    e.preventDefault()
    search(valueInput)
  }

  const handleChange = (event) => {
    setValueInput(event.target.value); 
  }

  return (
    <div className="hero is-small is-primary">
      <form className="hero-body" onSubmit={handleSubmitForm}>
        <h1 className="title">ne arıyorsunuz ?</h1>
        <input type="text" value={valueInput} onChange={handleChange} className="input" placeholder="ne arıyorsunuz ?" />
      </form>
    </div>
  )
}
```

## api.jsx

```jsx
import axios from "axios"

const GETApi = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers:{
      Authorization: "Client-ID YOUR_API"
    },
    params:{
      query: term,
    },
  });
  return response.data.results;
}

export default GETApi;
```

## ImageList

```jsx
import ImageItem from "./ImageItem"

/* eslint-disable react/prop-types */
export const ImagesLists = ({imagesPlaceholder}) => {
  return (
    <div className="galary">
      {imagesPlaceholder.map((img, index) => {
        return <ImageItem key={index} imageSrc={img.urls.regular} altDescription={img.alt_description}/>
      })}
    </div>
  )
}
```

## ImageItem

```jsx
/* eslint-disable react/prop-types */
const ImageItem = ({ imageSrc, altDescription }) => {
  return (
    <figure>
      <img src={imageSrc} alt={altDescription} />
    </figure>
  );
};

export default ImageItem;
```