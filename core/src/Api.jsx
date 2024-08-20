import axios from "axios"

const GETApi = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers:{
      Authorization: "Client-ID -L4rpv0-NQpmcA8hdpBX9b_elp4vKRoHdo3fwcHNgzQ"
    },
    params:{
      query: term,
    },
  });
  return response.data.results;
}

export default GETApi;