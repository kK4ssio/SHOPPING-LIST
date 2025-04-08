import { Header } from "./components/header";
import { Form } from "./components/form";
import { Product } from "./components/products";
import shoplist from "../data.json";
import { useState } from "react";

export function App() {
  const [search, setSearch] = useState("");

  const filtredList = shoplist.lista_de_compras.filter(({ nome }) =>
    nome.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <div className="container">
        <Header />
        <Form 
        
        onSearch={setSearch}

        />

        <div className="products-list">
          {filtredList.map(({ nome, quantidade, tipo }, index) => (
            <Product
              key={index}
              productName={nome}
              quantity={quantidade}
              type={tipo}

            />
          ))}
        </div>
      </div>
    </>
  );
}
