import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Cart from './pages/cart'
import ProductProvider from './components/productsProvider';

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;
