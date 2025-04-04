import "./styles.css";
import { Apple, EllipsisVertical } from "lucide-react";

export function Product({ productName, quantity, type }) {
  return (
    <div className="card-product">
      <div className="details">
        <p>{productName}</p>
        <span>{quantity}</span>
      </div>

      <div className="category">
        <p className="tag">
          <Apple size={16} />
          {type}
        </p>

        <EllipsisVertical size={20} color="#a881e6" />
      </div>
    </div>
  );
}
