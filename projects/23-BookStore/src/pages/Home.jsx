import Book from "./../components/Book.jsx";
import useFetchBooks from "../hooks/useFetchBooks";

const Home = () => {
  const { data, err, loading } = useFetchBooks();
  const books = Array.isArray(data) ? data.slice(0, 3) : null;

  return (
    <div className="main">
      <div className="center_content">
        <h1 className="title is-size-1"> Ana Sayfa </h1>
        <h1 className="subtitle is-size-3 playwrite-cu mt-4">En iyi dünya kitapların dünyası</h1>
      </div>

      <div className="hot-books">
        {
          loading ? (
            <div>yükleniyor...</div>
          ) : (
            !books ? (
              <div className="is-size-2">kitap bulunamadı</div>
            ) : (
              err ? (
                <div className="is-size-2">sunucu hatası {err.mesage}</div>
              ) : (
                books.map((book, index) => {
                  return <Book key={index} {...book} />
                })
              )
            )
          )
        }
      </div>
    </div>
  );
};

export default Home;
