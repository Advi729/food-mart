import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurantMenu.css';
import { IMG_URL_CDN, MENU_IMG_URL_CDN } from "../../constants";
import useRestaurantInfo from "../../utils/useRestaurantInfo";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, menu] = useRestaurantInfo(id);

    return (
<>  
 <div className="flex justify-center">
        <div className="lg:flex lg:items-center lg:justify-center">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {restaurant?.name}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <div className="mr-1.5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" >
            {restaurant?.id}
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <div className="mr-1.5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" >
            {restaurant?.areaName}
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <div className="mr-1.5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" >
            {restaurant?.city}
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <p className="mr-1.5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" >
            {restaurant?.avgRating} stars
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <p className="mr-1.5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" >
            {restaurant?.costForTwoMessage}
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>

        <div className="restaurant-info mt-4">
            <div className="flex justify-center mb-5">
                <img className="rounded-lg" src={IMG_URL_CDN + restaurant?.cloudinaryImageId} />
            </div>
            {/* <div className="lg:flex lg:items-center lg:justify-center"> */}
      <div className="ml-7 min-w-0 flex-1">
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
         Menu
        </h3>
        </div>
        {/* </div> */}
            <div className="restaurant-menu-cards flex justify center mr-3 ml-3">
                {
                    menu?.map((item) => {
                        // console.log('item: ', item?.card?.info?.imageId);
                        const price = parseFloat(item?.card?.info?.price) / 100;
                        const defaultPrice = parseFloat(item?.card?.info?.defaultPrice) / 100;
                        const formattedPrice = isNaN(price) ? defaultPrice.toFixed(2) : price.toFixed(2);
                        console.log(price, defaultPrice, formattedPrice);
                        return (
                            <div className="card bg-gray-50 ml-2 mr-2 shadow-xl" key={item?.card?.info?.id}>
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
        
</>
    );
}

export default RestaurantMenu;