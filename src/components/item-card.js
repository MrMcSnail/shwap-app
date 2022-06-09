
export default function ItemCard ({item_id, item_name, description, img_url, price, category_name}) {
  return (<li key={item_id}>
    <h2>{item_name}</h2>
    <p>{description}</p>
    <img src={img_url} alt={item_name}/>
    <p>{price}</p>
    <p>{category_name}</p>
    </ li>)
}

// {
//       "item_id": 1,
//       "item_name": "The Holy Grail",
//       "description": "Defo the real deal and not a prop from Indiana Jones",
//       "img_url": "https://test.com/The Holy Grail.jpg",
//       "price": 5000,
//       "category_name": "Relics"
//     }