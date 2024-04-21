import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const Inmunologia = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE FARMACOS</h2>
      <Search book={booksMedicina.Inmunologia} setSearch={setSearch}></Search>
      <hr />
      <Booksbase books={booksMedicina.Inmunologia} search={search}></Booksbase>
      <Footer></Footer>
    </>
  );
};

export default Inmunologia;