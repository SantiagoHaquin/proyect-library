import { Footer } from "../components/Footer";
import Booksbase from "../components/bookmain/Booksbase";
import { booksMedicina } from "../hooks/booksMedicina";

export const Medicina = () => {
  return (
    <>
      <div className="container-books">
        <h2 className="title">LIBROS DE MEDICINA</h2>
        <hr />
        <Booksbase books={booksMedicina.MedicinaInterna}></Booksbase>
      </div>
        <Footer></Footer>
    </>
  );
};
