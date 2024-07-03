import React, { useEffect } from 'react'
import ItemCard from '../Components/Card/card'
import heroImg from '../assets/hero.png'
import { useDispatch, useSelector } from 'react-redux';
import { allproductsApi } from '../Store/productSlice';
import { Link } from 'react-router-dom';
const Home = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(allproductsApi())
    }
  }, [dispatch, products.length])

  return (
    <div className='home'>
      <img src={heroImg} alt="hero" />
      <Link to='/products'><h3>See more...</h3></Link>
      <div className='products'>
        {products.slice(0, 3).map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
   
    </div>
  )
}

export default Home