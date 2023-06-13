import { useState, useEffect } from "react";
import { RESTAURANT_MENU_CDN_FIRST_PART, RESTAURANT_MENU_CDN_SECOND_PART } from "../constants";

const useRestaurantInfo = (id) => {
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    console.log('rs: ', restaurant);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(RESTAURANT_MENU_CDN_FIRST_PART + id + RESTAURANT_MENU_CDN_SECOND_PART);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        console.log(json?.data?.cards);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards);
    }

    return [restaurant, menu];
};

export default useRestaurantInfo;