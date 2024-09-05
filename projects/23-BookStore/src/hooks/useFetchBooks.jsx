import axios from "axios";
import { useEffect, useState } from "react";

const useFetchBooks = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/Books");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("hata : ", error);
        setLoading(false);
        setErr(error);
      }
    };
    fetchData();
  }, []);

  return { data, err, loading };
};

export default useFetchBooks;
