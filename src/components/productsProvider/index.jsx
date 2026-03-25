import { useEffect, useState } from 'react';
import ProductsContext from '../../context';
import axios from 'axios';

function ProductProvider({ children }) {
  const BASE_URL = 'https://69c39e51b780a9ba03e75a9a.mockapi.io';

  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState([]);

  // Работа с продуктами на главной
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productsData`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Работа с корщиной
  const addToCart = async (product) => {
    try {
      const response = await axios.post(`${BASE_URL}/cartData`, product);
      setCartData((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`);
      setCartData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      fetchProducts();
      fetchCartData();
    }, []);

  return (
    <ProductsContext.Provider
      value={{ products, cartData, addToCart, deleteFromCart }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
