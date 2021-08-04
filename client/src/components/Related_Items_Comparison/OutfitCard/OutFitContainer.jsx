import React, {useState,useContext} from 'react';
import {RelatedProducts, Card, PlusSign} from './styles.js';
import OutfitCard from './OutfitCard.jsx';

const OutFitContainer = () => {
  let [count, setCount] = useState(0);
  const [isOutFit, addOutFit] = useState(false);
  const clickOutFit = () => {
    setCount(count+=1);
    addOutFit(true);
  };
  return (
    <RelatedProducts>
      {
        isOutFit?
          <RelatedProducts>
            <Card>
              <PlusSign onClick={() => clickOutFit() }>+</PlusSign>
            </Card>
            <OutfitCard count={count}/>
          </RelatedProducts>
          :
          <RelatedProducts>
            <Card>
              <PlusSign onClick={() => clickOutFit() }>+</PlusSign>
            </Card>
          </RelatedProducts>
      }
    </RelatedProducts>
  );
};

export default OutFitContainer;