import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = ({ date }) => {
  let convertedDate = new Date(date);
  console.log(convertedDate);
  return (
    <>
      {formatDistanceToNow(convertedDate, {
        addSuffix: true,
        locale: ruLocale
      })}
    </>
  );
};
Time.propTypes = {
  date: PropTypes.object
};
export default Time;
