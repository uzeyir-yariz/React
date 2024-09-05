import Book from "./../components/Book.jsx";
import useFetchBooks from "../hooks/useFetchBooks";
import { useEffect, useState } from "react";

const Bookshelf = () => {
  const [search, setSearch] = useState("");
  const { data, err, loading } = useFetchBooks();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data);
      setFilteredBooks(data); // İlk yüklemede tüm kitapları göster
    }
  }, [data]);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [search, books]); // books'u da bağımlılıklar arasına ekliyoruz

  return (
    <div className="fullheight">
      <div className="hero is-link">
        <div className="hero-body">
          <h1 className="has-text-centered title">kitaplar</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="kitap arama"
            className="input"
          />
        </div>
      </div>

      <div className="books">
        {loading ? (
          <div>yükleniyor...</div>
        ) : !filteredBooks.length ? (
          <div className="is-size-2">kitap bulunamadı</div>
        ) : err ? (
          <div className="is-size-2">sunucu hatası {err.message}</div>
        ) : (
          filteredBooks.map((book, index) => {
            return <Book key={index} {...book} />;
          })
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
