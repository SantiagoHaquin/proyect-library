import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import { Contact } from "../../components/Ctc";
import Search from "../../components/Search";
const Farmaco = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE FARMACOS</h2>
      <Search book={booksMedicina.Farmaco} setSearch={setSearch}></Search>
      <hr />
      <div className="container-books">
        <Booksbase books={booksMedicina.Farmaco} search={search}></Booksbase>
      </div>
      <hr />
      <Contact></Contact>

      <Footer></Footer>
    </>
  );
};

export default Farmaco;
