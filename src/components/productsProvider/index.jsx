import { useState } from "react";
import ProductsContext from "../../context";
import axios from 'axios';

function ProductProvider({children}) {
  
  const [cartData, setCartData] = useState();
  const [products, setProducts] = useState();

  // Работа с продуктами на главной
  const fetchProducts = async () => {};

  // Работа с корщиной
  const addToCart = async () => {};
  const deleteFromCart = async () => {};
  const fetchCartData = async () => {};

  return <ProductsContext.Provider value={{}}>
    {children}
  </ProductsContext.Provider>

}

export default ProductProvider;