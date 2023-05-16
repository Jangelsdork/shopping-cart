export default function Item({ item, basket, setBasket }) {
  function handleClick(e) {
    console.log(basket);
    let newBasket = basket.slice();
    setBasket(newBasket.concat(item));
    // console.log(basket)
  }

  return (
    <div className="item">
      <div className="image" style={{ backgroundColor: item.colorId }}></div>
      <div className="title">{item.itemName}</div>
      <div className="price">${item.itemPrice}</div>
      <button
        className="cartButton"
        id={item.itemId}
        onClick={(e) => handleClick(e)}
      >
        Add to Cart
      </button>
    </div>
  );
}
