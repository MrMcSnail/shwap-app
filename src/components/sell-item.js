import { sellItem } from "../api";
import { useState } from 'react'
import { Card } from "@mui/material";

const SellItem = () => {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault()
        sellItem(
            {
                "item_name": itemName,
                "description": description,
                "img_url": imgURL,
                "price": price,
                "category_name": category,
            }
        );
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <label for="item_name">Item Name: </label>
                <input type="text" id="item_name" onChange={(event) => setItemName(event.target.value)} value={itemName} /><br />
                <label for="description">Description: </label>
                <input type="text" id="description" onChange={(event) => setDescription(event.target.value)} value={description} /><br />
                <label for="img_url">Image URL: </label>
                <input type="url" id="img_url" onChange={(event) => setImgURL(event.target.value)} value={imgURL} /><br />
                <label for="price">Price: </label>
                <input type="number" id="price" onChange={(event) => setPrice(event.target.value)} value={price} /><br />
                <label for="category_name">Category: </label>
                <input type="text" id="category_name" onChange={(event) => setCategory(event.target.value)} value={category} /><br />
                <button type="submit">Sell Item</button>
            </form>
        </Card>
    )
}

export default SellItem;