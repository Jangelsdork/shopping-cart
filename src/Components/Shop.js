import Item from "./Item";

export default function Shop({ items, basket, setBasket }) {
  return (
    <div>
      <div className="topnav">
        <div>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
        </div>
        <div className="brand">COLOURS</div>
      </div>
      <div className="shopContainer">
        {items.map((anItem) => {
            return(
                <Item 
                    itemName={anItem.itemName}
                    itemPrice={anItem.itemPrice}
                    colorId={anItem.colorId}
                    itemId={anItem.itemId}
                    basket={basket}
                    setBasket={setBasket}
                    />
            )
        })
        }
      </div>
    </div>
  );
}

