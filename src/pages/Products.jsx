import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/Card/card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { allproductsApi } from '../Store/productSlice';
import Dropdown from '../Components/dropdown';

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(allproductsApi());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='cart_page'>
      <div className='cart_headings'>
        <h3 style={{ padding: "20px" }}>Products</h3>
        <Dropdown onSelect={handleCategorySelect} /></div>
      <div className='cart_items'>
        {filteredProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products