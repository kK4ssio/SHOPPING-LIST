import { Header } from "./components/header";
import { Form } from "./components/form"
import { Product } from "./components/products"
import shoplist from "../data.json";


export function App() {
  return (
    <>
      <div className="container">

      <Header />
      <Form/>

      <div className="products-list">
      {
        shoplist.lista_de_compras.map(({nome,quantidade,tipo}, index) => 
        <Product key={index} productName={nome} quantity={quantidade} type={tipo}/>
     ) }
      
      </div>

      </div>
    </>
  );
}
