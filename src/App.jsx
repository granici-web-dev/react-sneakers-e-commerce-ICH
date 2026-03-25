import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
