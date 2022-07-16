import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is your Category Detail</h4>
            <h6>Selected Category: {name}</h6>
        </div>
    );
};

export default CategoryDetail;