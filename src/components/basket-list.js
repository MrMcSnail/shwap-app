import { useState, useEffect } from "react";
import ItemCard from "./item-card";
import { fetchBasket } from "../api";
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

const BasketList = () => {
    const { user } = useContext(UserContext)
    const [basketItems, setBasketItems] = useState([]);


    useEffect(() => {
        const username = user.username;

            fetchBasket(username).then((AllBasketItems) => {
              setBasketItems(AllBasketItems);
            })
        
    }, [])
    const basketCards = basketItems.map((basketItemObj) => {
        const { item_id, item_name, description, img_url, price, category_name } =
            basketItemObj;

        return (
            <ItemCard
                key={item_id}
                item_id={item_id}
                item_name={item_name}
                description={description}
                img_url={img_url}
                price={price}
                category_name={category_name}
            />
        );
    })
    return (<>
        <ul className="BasketList">{basketCards}</ul>
        <p>Hello!</p>

    </>
    );

}

export default BasketList;