import { useEffect, useState } from 'react';
import './Body.css';
import { hotelData } from '../../constants';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import ShimmerUI from '../ShimmerUI/ShimmerUI';
import { Link } from 'react-router-dom';
import { filterData } from '../../utils/helper';
import useOnline from '../../utils/useOnline';

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

  const isOnline = useOnline();
  if(!isOnline) {
    return <h1>You are offline, Please check your internet connection!</h1>
  }

  // Not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container flex justify-center m-2">
        <input
          type="text"
          className="search-input bg-slate-200  border-cyan-100"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      
        <button
          className="search-btn pl-1 pr-1 ml-3 rounded bg-slate-300"
          onClick={() => {
            const updateData = filterData(searchText, allRestaurants);
            console.log(updateData);
            setFilteredRestaurants(updateData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list ml-5 flex justify-self-center">
        {
          // If no restaurants found
          filteredRestaurants?.length === 0 ? (
            <h1>No restaurants found!!</h1>
          ) : (
            filteredRestaurants.map((hotel) => {
              return (
                <Link to={'/restaurant/' + hotel.data.id} key={hotel.data.id} className="link-style"><RestaurantCard {...hotel.data} /></Link>             
              )
            })
          )
        }
      </div>
    </>
  );
};

export default Body;
