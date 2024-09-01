import { useCallback, useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import axios from "axios";

const ProductsApp = () => {
  const [Products, setProducts] = useState([]); // listeler geçici olarak burada tutulacak
  const [Search, setSearch] = useState("");
  const [SortType, setSortType] = useState("asc");

  const fetchProducts = async () => {
    try{
      const res = await axios.get("http://localhost:3001/product");
      setProducts(res.data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useCallback((product) => {
    console.log("filterProducts çalıştı");
    return product.filter((item) => {
      return item.name.toLowerCase().includes(Search.toLowerCase());
    });
  }, [Search]);

  const sortedProducts = useCallback((product) => {
    console.log("sortedProducts çalıştı")
    return [...product].sort((a, b) => {
      if(SortType === "asc") return a.price - b.price;
      return b.price - a.price;})
  }, [SortType]);

  const filteredAndSortedProducts = useCallback(() => {
    const filtredProducts = filteredProducts(Products);
    return sortedProducts(filtredProducts)
  }, [filteredProducts, sortedProducts, Products]);

  return (
    <div>
      {/* veriler buradan alınıcak */}
      <div className="p-4 custom-form">
        <div className="control">
          <input
            type="text"
            className="input is-rounded"
            placeholder="ürün arayınız..."
            value={Search}
            onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className="select">
          <select value={SortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
      </div>

      {/* ürünler burada gösterilecek */}
      <div>
        <ProductsList productsList={filteredAndSortedProducts()}/>
      </div>
    </div>
  );
};

export default ProductsApp;
