import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => (
  <>{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</>
);
Time.propTypes = {
  date: PropTypes.bool
};
export default Time;
