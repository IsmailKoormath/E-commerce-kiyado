// src/Components/Dropdown/Dropdown.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dropdown = ({ onSelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <div className='dropdown-container'>
            <select className='dropdown-select' onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
