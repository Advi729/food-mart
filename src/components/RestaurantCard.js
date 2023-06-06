import { IMG_URL_CDN } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => (
    // console.log(props)
    <div className='card'>
        <img src={ IMG_URL_CDN + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{avgRating} stars</h4>
    </div>
);

export default RestaurantCard;