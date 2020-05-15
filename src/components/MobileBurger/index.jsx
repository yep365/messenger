import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

const MobileBurger = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const toggleMenuIcon = () => {
    setMenuIcon(!menuIcon);
  };
  const currentDialogId = useSelector((state) => state.dialogs.currentDialogId);
  const burger = document.querySelector("#toggleBurger");

  useEffect(() => {
    if (burger && burger.checked) {
      burger.checked = !burger.checked;
      setMenuIcon(!menuIcon);
    }
  }, [currentDialogId]);

  return (
    <>
      <label onClick={toggleMenuIcon} htmlFor="toggleBurger">
        {menuIcon === true ? <>&#9421;</> : <>&#9776;</>}
      </label>
      <input type="checkbox" id="toggleBurger" />
    </>
  );
};

export default MobileBurger;
