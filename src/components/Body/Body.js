import { useEffect, useState } from 'react';
import './Body.css';
import { hotelData } from '../../constants';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import ShimmerUI from '../ShimmerUI/ShimmerUI';

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  console.log('filtered:', filteredData);
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState(''); // local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  console.log('render');

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9367552&lng=76.3180429&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    console.log('json: ', json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // Not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const updateData = filterData(searchText, allRestaurants);
            console.log(updateData);
            setFilteredRestaurants(updateData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {
          // If no restaurants found
          filteredRestaurants?.length === 0 ? (
            <h1>No restaurants found!!</h1>
          ) : (
            filteredRestaurants.map((hotel) => {
              return <RestaurantCard {...hotel.data} key={hotel.data.id} />;
            })
          )
        }
      </div>
    </>
  );
};

export default Body;
