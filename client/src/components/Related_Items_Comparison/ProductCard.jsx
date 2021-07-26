import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';


const ProductCard = () => {
  const [AllProducts, setProducts] = useState([]);
  useEffect( () => {
    async function fetchData(){
      const {data} = await axios.get('http://localhost:3000/products' );
      // setProducts(data);
      const modified = data.forEach( (obj,i,arr)  => {
         axios.get(`http://localhost:3000/products/${obj.id}/styles`)
         .then( ({data}) => {
             obj = {...obj, products:data.results};
             arr[i] = obj;
             setProducts(arr);
         })
         .catch(err => console.log(err));
      });
      return data;
    }
    fetchData();
  },[setProducts]);
  console.log('AllProducts', AllProducts)
    return (
    <div className="Related_Products">
      {
        AllProducts.map( ({id,name,category, default_price,}) => (
          <div className="card" key={id}>
            <div className="img-container">
              <img src=''></img>
            </div>
            <h3>{category}</h3>
            <h3>{name}</h3>
            <p className="price">{default_price}</p>
            <img className="stars"></img>
          </div>
        ))
      }
    </div>
  )
};

export default ProductCard;