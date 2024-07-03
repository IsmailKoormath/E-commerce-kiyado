import React, { useState } from "react";
import "./Card.css"

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/cartSlice";

const ItemCard = ({ product }) => {

  const dispatch = useDispatch()

  //--- add to cart-----

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

// -----------

  return (
    <div className="itemCard_main">
      <div className="card_image_section">
        <img src={product?.image} alt="Product_Image" />
      </div>
      <Link to=''>
        <div className="card_content_section">
          <div>
          <h4 className="item_name">{product?.title}</h4>
          <h5 className="item_price">₹{product?.price}</h5>
          </div>
          <button onClick={handleAddToCart} className="cart_btn">Add To Cart</button>

        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
