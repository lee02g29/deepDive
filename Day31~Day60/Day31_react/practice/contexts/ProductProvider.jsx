import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ProductContext = createContext();

function ProductProvider({children}) {
  const [name, setName] = useState('[사미헌] 갈비탕')
  const [price, setPrice] = useState("11050")
  const [discount, setDiscount] = useState(15);
  const [showBucket, setShowBucket] = useState(false);

  let buyItems = [];

  const addBuyItem = () => {
    buyItems.push({
      id: "",
      name: "",
      price: "",
      discount: "",
    });
  }

  const value = {
    name, setName,
    price, setPrice,
    discount, setDiscount,
    showBucket, setShowBucket
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

function useProductContext() {
  return useContext(ProductContext);
}

export {ProductProvider, useProductContext}