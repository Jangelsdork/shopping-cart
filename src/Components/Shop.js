import Item from "./Item";

export default function Shop({ items }) {
  return (
    <div>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </div>
      <div className="shopContainer">
        {items.map((anItem) => {
            return(
                <Item 
                    itemName={anItem.itemName}
                    itemPrice={anItem.itemPrice}
                    colorId={anItem.colorId}
                    />
            )
        })
        }
      </div>
    </div>
  );
}

{
  /* <div>{items[0].itemDescription}</div> */
}
