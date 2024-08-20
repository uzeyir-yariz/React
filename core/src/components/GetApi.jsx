import axios from "axios"

const GetApi = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID uOa6io0Re_wQZKWqgbY43b6qiOcbflJj38tpa_eSEE0"
    },
    params: {
      query: term
    }
  })
  return response.data.results;
}

export default GetApi;