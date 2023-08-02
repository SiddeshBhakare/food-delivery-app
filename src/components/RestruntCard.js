import { IMG_CDN_URL } from "../constants";

const RestruntCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  areaName,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}⭐</h4>
      <h5>Reviews : {totalRatingsString}</h5>
      <h5>locality : {areaName}</h5>
    </div>
  );
};

export default RestruntCard;
