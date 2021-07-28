import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard/ProductCard.jsx';
import OutfitCard from './OutfitCard/OutfitCard.jsx';


const Related_Items_Comparison = () => {
    return (
        <div className="Related_Products">
            <h1 Style='margin: 2rem 0 1rem 1rem;'>Related Products</h1>
            <ProductCard />
            <h1 Style='margin: 2rem 0 1rem 1rem;'>Your Outfit</h1>
            <OutfitCard />
        </div>
    )
};

export default Related_Items_Comparison;