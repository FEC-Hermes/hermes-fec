import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import OutfitCard from './OutfitCard.jsx';


const Related_Items_Comparison = () => {
    return (
    <div className="Related_Products">
       <ProductCard />
       <OutfitCard />
    </div>
  )
};

export default Related_Items_Comparison;