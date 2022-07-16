import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name:'Dell',category:'laptop'},{name:'hp',category:'laptop'},
    {name:'Nothing',category:'mobile'},{name:'Apple',category:'mobile'},
    {name:'Sony',category:'camera'},{name:'Canon',category:'camera'}
]

const Categories = () => {
    const category = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
         const matchedProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase());
         setProducts(matchedProducts);
    },[category])
    return (
        <div>
            <h2>Select your Category: {category}</h2>
           {
            products.map(pd => <CategoryDetail product= {pd}></CategoryDetail>)
           }
        </div>
    );
};

export default Categories;