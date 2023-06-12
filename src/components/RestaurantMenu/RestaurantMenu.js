import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurantMenu.css';
import { IMG_URL_CDN, MENU_IMG_URL_CDN } from "../../constants";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [menu, setMenu] = useState([]);
    console.log('rs: ', restaurant);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9367552&lng=76.3180429&restaurantId=${id}&submitAction=ENTER`);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        console.log(json?.data?.cards);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards);
    }

    return (
        <div className="restaurant-info">
            <div>
                <h1>Restaurant id: {restaurant?.id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_URL_CDN + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMessage}</h3>
            </div>
            <div className="restaurant-menu-cards">
                {
                    menu?.map((item) => {
                        console.log('item: ', item?.card?.info?.imageId);
                        return (
                            <div className="card" key={item?.card?.info?.id}>
                            <img src={MENU_IMG_URL_CDN + item?.card?.info?.imageId} />
                            <h2>{item?.card?.info?.name}</h2>
                            <h3>{item?.card?.info?.description}</h3>
                            <h4>{item?.card?.info?.category}</h4>
                            <h4>₹ {(item?.card?.info?.price) ? (item?.card?.info?.price) : (item?.card?.info?.defaultPrice)}</h4>
                            </div>
                        );
                    })
                } 
            </div> 
        </div>
    );
}

export default RestaurantMenu;