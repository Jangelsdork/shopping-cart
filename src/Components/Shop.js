import { Link } from "react-router-dom";
import Item from "./Item";

export default function Shop({ items, basket, setBasket }) {
  return (
    <div>
      <div className="topnav">
        <div>
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/shop" }}>Shop</Link>
          <Link to={{ pathname: "/cart" }}>Cart</Link>
        </div>
        <div className="brand">COLOURS</div>
      </div>
      <div className="shopContainer">
        {items.map((anItem) => {
          return (
            <Item
              key={anItem.itemId}
              item={anItem}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </div>
    </div>
  );
}
