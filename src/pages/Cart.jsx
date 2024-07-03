import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartTotal } from '../Store/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector(selectCartTotal);
  const dispatch = useDispatch()

  const itemRemove = (product)=>{
    dispatch(removeFromCart(product))
  }
  return (
    <div className='cart_page'>
      <div className='cart_headings'>
        <h2>Cart</h2> <h3>Total Amount: ₹{totalAmount}</h3></div>
      <div className='cart_items'>
        {cart.map((product) => (
          <div className="itemCard_main" key={product?.id}>
            <div onClick={() => itemRemove(product?.id)} className="cross_icon">X</div> 
            <div className="card_image_section">
              <img src={product?.image} alt="Product_Image" />
            </div>
            <div className="card_content_section">
              <div>
                <h4 className="item_name">{product?.title}</h4>
                <h5 className="item_price">₹{product?.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart