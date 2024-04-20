import Booksbase from "../components/bookmain/Booksbase";
import { Footer } from "../components/Footer";
import { booksMedicina } from "../hooks/booksMedicina";
export const Enfermeria = () => {
  return (
    <>
    <div className="container-books">
      <h2 className="title">LIBROS DE ENFERMERIA</h2>
      <hr />
      <Booksbase books={booksMedicina.Anatomia}></Booksbase>
    </div>
    <Footer></Footer>
  </>
  );
};