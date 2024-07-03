import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Components/Layout/Layout';
import Products from './pages/Products';
import Cart from './pages/Cart';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
            {/* <Route path='/productdetails/:id' element={<ProductDetails />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
