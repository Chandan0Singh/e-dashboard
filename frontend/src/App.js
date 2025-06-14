import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';
import AddProduct from './components/Addproduct';
import ProductList from './components/Productlist';
import UpdateProduct from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Footer />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/profile" element={<h1>Profile Page</h1>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
          </Route>
          <Route path="/logout" element={<h1>Logout Page</h1>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<h1><Login /></h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
