import { useState } from "react";
import { restruntList } from "../constants";
import RestruntCard from "./RestruntCard";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restruntList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restruntList);

  return (
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
            //Filter data
            //update state - restaurant variable
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search{" "}
        </button>
      </div>
      <div className="restrunt-list">
        {filteredRestaurants.map((restaurant) => {
          return <RestruntCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
