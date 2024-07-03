import React, { useState } from "react";
import "./Header.css";
import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [title, setTitle] = useState("");
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <header className="header_main">
        <img src={logo} alt="logo" className="logo" />
        <div className="navigation">
          <div>
            <Link to="/">
              <span>Home </span></Link>
            <Link to="/products">
              <span>Products </span></Link>
          </div>
          <form action="" className="search_form">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="search"
              className="search_input"
              placeholder="Serach any things"
            />
            <button onClick={''} className="search_btn">
              Search
            </button>
          </form>
        </div>
        <Link to="/cart">
        <div className="second_section">
          <div className="icon_container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="white" strokeWidthh="1.5" stroke-miterlimit="10" strokeLinecap="round" trokeLinejoin="round" />
              <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="white" strokeWidthh="1.5" stroke-miterlimit="10" strokeLinecap="round" trokeLinejoin="round" />
              <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="white" strokeWidthh="1.5" stroke-miterlimit="10" strokeLinecap="round" trokeLinejoin="round" />
              <path d="M9 8H21" stroke="white" strokeWidthh="1.5" stroke-miterlimit="10" strokeLinecap="round" trokeLinejoin="round" />
            </svg>
              <div className="count">{cart.length}</div>
          </div>
          <p className="header_text">Cart</p>
          </div></Link>
      </header>
      {/* {showWishlist && <WishList handleCancel={handleShowwishlist} />} */}
    </>
  );
};

export default Header;
