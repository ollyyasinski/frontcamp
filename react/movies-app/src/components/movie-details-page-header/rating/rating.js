import React from "react";
import PropTypes from "prop-types";

import "./rating.css";

const Rating = ({ rating }) => <div className="rating">{rating}</div>;

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
