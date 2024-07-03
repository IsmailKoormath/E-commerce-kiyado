import React from "react";
import './sidebar.css'

import home from "../../../assets/home.svg";
import list from "../../../assets/list.svg";
import cart from "../../../assets/cart.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ viewSidebar, updateView }) => {
  return (
    <div className="sidebar">
      <div className= "">
        {viewSidebar ? (
          <img
            onClick={updateView}
            style={{ width: "20px", height: "20px" }}
            alt="cross"
            src={cross}
          />
        ) : (
          ""
        )}
      </div>

      <div>
        <ul>
          <Link onClick={viewSidebar ? updateView : () => { }} to="/">
            <li className="menu">
              <img alt="icon" src={home} />
              Home
            </li>
          </Link>
          <Link onClick={viewSidebar ? updateView : () => { }} to="/products">
            <li className="menu">
              <img alt="icon" src={list} />
              Products
            </li>
          </Link>
          <Link onClick={viewSidebar ? updateView : () => { }} to="/cart">
            <li className="menu">
              <img alt="icon" src={cart} />
              Cart
            </li>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
