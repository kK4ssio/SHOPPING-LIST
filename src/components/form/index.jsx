import "./styles.css";
import { useState } from "react";
import { Plus } from "lucide-react";

export function Form({onSearch}) {
  const [input, setInput] = useState("");

  function handleChange(e){
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  }
  return (
    <form>
      <div className="item-input">
        <label htmlFor="item">Item</label>
        <input type="text" className="item" value={input} onChange={handleChange}/>
      </div>

      <label htmlFor="quantity">Quantidade</label>
      <div className="quantity-input-container">
        <input type="number" className="quantity-input" min={1} />
        <select className="unit-select">
          <option value="un. ">Un. </option>
          <option value="L ">L </option>
          <option value="Kg">Kg </option>
        </select>
      </div>

      <div className="item-input">
        <label htmlFor="category">Categoria</label>
        <button type="button">
          <Plus />
        </button>
      </div>
    </form>
  );
}
