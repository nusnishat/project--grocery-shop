import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';
import BabyCare from './pages/Shop/BabyCare/BabyCare';
import HealthCare from './pages/Shop/HealthCare/HealthCare';
import HomeKithcen from './pages/Shop/Home-Kitchen/HomeKitchen';
import MeatFish from './pages/Shop/Meat-Fish/MeatFish';
import Snacks from './pages/Shop/Snacks/Snacks';
import VegetablesAndFruits from './pages/Shop/Vegetables and Fruits/VegetablesAndFruits';
import Cooking from './pages/Shop/Cooking/Cooking'
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from '../src/pages/Shared/Cart/Cart'
import CheckOut from '../src/pages/CheckOut/CheckOut'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/home' element={<Home/>}/>
        <Route exact path ='/cart' element={<Cart/>}/>
        <Route  path ='/fruits-vegetables' element={<VegetablesAndFruits/>}/>
        <Route  path ='/meat-fish' element={<MeatFish/>}/>
        <Route  path ='/home-kitchen' element={<HomeKithcen/>}/>
        <Route exact path ='/beauty-health' element={<HealthCare/>}/>
        <Route exact path ='/baby-care' element={<BabyCare/>}/>
        <Route exact path ='/snacks' element={<Snacks/>}/>
        <Route exact path ='/health-products' element={<Home/>}/>
        <Route exact path ='/cooking' element={<Cooking/>}/>
        <Route exact path ='/register' element={<Cooking/>}/>
        <Route exact path ='/login' element={<Register/>}/>
        <Route exact path ='/checkout' element={<CheckOut/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
