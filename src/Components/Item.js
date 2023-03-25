export default function Item(items, { basket }, setBasket){

function handleClick(e) {
  console.log(this.basket)
    // let itemNumber = parseInt(e.target.id)  
    // let newBasket = basket.slice();
    // setBasket(newBasket.concat(items[itemNumber]))
    // console.log(basket)
}
    
    return(
        <div className="item">
        <div
          className="image"
          style={{ backgroundColor: items.colorId }}
        ></div>
        <div className="title">{items.itemName}</div>
        <div className="price">${items.itemPrice}</div>
        <button className="cartButton" id={items.itemId} onClick={(e) => handleClick(e)} >Add to Cart</button>
      </div>
    )
}