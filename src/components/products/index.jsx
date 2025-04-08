import "./styles.css";
import { EllipsisVertical } from "lucide-react";
import { Apple, Sandwich, Carrot, Milk, Beef } from "lucide-react";

const icons = {
  fruta: Apple,
  padaria: Sandwich,
  legume: Carrot,
  bebida: Milk,
  carne: Beef,
};

export function Product({ productName, quantity, type }) {
  const Icon = icons[type] || Apple;

  return (
    <div className="card-product">
      <div className="details">
        <p>{productName}</p>
        <span>{quantity}</span>
      </div>

      <div className="category">
        <p className={`tag ${type}`}>
          <Apple size={16} />
          {type}
        </p>

        <EllipsisVertical size={20} color="#a881e6" />
      </div>
    </div>
  );
}
