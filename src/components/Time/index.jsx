import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const Time = () => (
  <>
    {formatDistanceToNow(new Date("Fri Mar 15 2020 14:25:48 GMT+0300"), {
      addSuffix: true,
      locale: ruLocale
    })}
  </>
);
Time.propTypes = {
  date: PropTypes.bool
};
export default Time;
