import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Cart from './pages/cart';
import Contact from './pages/contact';
import ProductProvider from './components/productsProvider';
import { Navigate } from 'react-router-dom';
import NotFound from './pages/notFound';

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path="home" element={<Navigate to={'/'} replace />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </ProductProvider>
  );
}

export default App;
