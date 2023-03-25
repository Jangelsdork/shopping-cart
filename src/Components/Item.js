export default function Item( items ){

    
    return(
        <div className="item">
        <div
          className="image"
          style={{ backgroundColor: items.colorId }}
        ></div>
        <div className="title">{items.itemName}</div>
        <div className="price">${items.itemPrice}</div>
      </div>
    )
}