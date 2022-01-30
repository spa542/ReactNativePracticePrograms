var camelize = require("camelize");
import { host, isMock } from "../../utils/env";

export const restaurantsRequest = (location) => {
  // Interaction between firebase local function and 
  return fetch(
    `${host}placesNearby?location=${location}&mock=${isMock}`
  ).then((res) => { 
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
