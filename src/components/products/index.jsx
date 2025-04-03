import "./styles.css";
import { Apple, EllipsisVertical } from "lucide-react";

export function Product() {
  return (
    <div>
      <div>
        <p>Maçã</p>
        <span>2 uni</span>
      </div>
      <Apple size={16} />
      <EllipsisVertical size={20} />
    </div>
  );
}
