import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurantMenu.css';
import { IMG_URL_CDN, MENU_IMG_URL_CDN } from "../../constants";
import useRestaurantInfo from "../../utils/useRestaurantInfo";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, menu] = useRestaurantInfo(id);

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
                        // console.log('item: ', item?.card?.info?.imageId);
                        const price = parseFloat(item?.card?.info?.price) / 100;
                        const defaultPrice = parseFloat(item?.card?.info?.defaultPrice) / 100;
                        const formattedPrice = isNaN(price) ? defaultPrice.toFixed(2) : price.toFixed(2);
                        console.log(price, defaultPrice, formattedPrice);
                        return (
                            <div className="card" key={item?.card?.info?.id}>
                            <img src={MENU_IMG_URL_CDN + item?.card?.info?.imageId} />
                            <h2>{item?.card?.info?.name}</h2>
                            <h3>{item?.card?.info?.description}</h3>
                            <h4>{item?.card?.info?.category}</h4>
                            <h4>₹ {formattedPrice}</h4>
                            </div>
                        );
                    })
                } 
            </div> 
        </div>
    );
}

export default RestaurantMenu;