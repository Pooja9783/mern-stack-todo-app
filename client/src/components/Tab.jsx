import React from "react";
import { TABS } from "../redux/actionType";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/action";
const Tab = ({ currentTab }) => {
  console.log(currentTab);
  const dispatch = useDispatch();
  return (
    <div>
      {TABS.map((tab) => (
        <button
          onClick={() => dispatch(toggleTab(tab))}
          className={tab === currentTab ? "button selected" : "button"}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
