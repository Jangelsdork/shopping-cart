export default function Shop({ items }) {
  return (
    <div>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </div>
      <div className="shopContainer">
        <div className="item">
          <div
            className="image"
            style={{ backgroundColor: items[0].colorId }}
          ></div>
          <div className="title">{items[0].itemName}</div>
          <div className="price">${items[0].itemPrice}</div>
        </div>
        <div className="item">
          <div
            className="image"
            style={{ backgroundColor: items[1].colorId }}
          ></div>
          <div className="title">{items[1].itemName}</div>
          <div className="price">${items[1].itemPrice}</div>
        </div>
        <div className="item">
          <div
            className="image"
            style={{ backgroundColor: items[2].colorId }}
          ></div>
          <div className="title">{items[2].itemName}</div>
          <div className="price">${items[2].itemPrice}</div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>{items[0].itemDescription}</div> */
}
