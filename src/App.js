import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Categories from './Components/Categories';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Page from './Components/Page';
import Main from './Components/Main';
import Footer from './Components/Footer'
import data from './data';
import Cart from './Components/Cart';


const uniquelist = ["All Categories", ...new Set(data.map((val) => val.cateogry))];
// const uniquelist = data && data.length > 0 ? [...new Set(data.map((val) => val.category)), "All Categories"].reverse() : [];

function App() {

  // Category Filter
  const [mainData, setMainData] = useState(data);


  // Cart items
  const [cartItems, setCartItems] = useState([]);


  const filteritem = (cateogry) => {
    if (cateogry === 'All Categories') {
      setMainData(data);
      return;
    }
    const updatedList = data.filter((val) => {
      return val.cateogry === cateogry;
    })
    setMainData(updatedList);
  };


  // Add To Cart
  const onAdd = (val) => {
    console.log('clicked add to cart');
    const exist = cartItems.find((x) => x.id === val.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === val.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else {
      setCartItems([...cartItems, { ...val, qty: 1 }]);
    }
  };

  return (
    <>
      <Info />
      <Navbar CartCount={cartItems.length} cartItems={cartItems} />
      <Page />



      <Routes>
        <Route path='/main' element={<Main filteritem={filteritem} uniquelist={uniquelist} mainData={mainData} onAdd={onAdd} />} />
        <Route path='/categories' element={<Categories filteritem={filteritem} uniquelist={uniquelist} />} />
        {/* change kia hai card to cart Components se */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/details' element={<Details />} />
        {/* <Route path= '/footer' element={<Footer/>} /> */}
      </Routes>
      <Footer />
    </>
  );
};
export default App;
