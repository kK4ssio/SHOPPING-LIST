import "./styles.css";
import { Plus } from "lucide-react";

export function Form() {
  return (
    <form>
      <div className="item-input">
        <label htmlFor="item">Item</label>
        <input type="text" className="item" />
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
