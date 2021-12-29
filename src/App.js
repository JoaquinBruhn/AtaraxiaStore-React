import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ItemDetail from './components/body/itemDetail/itemDetail'
import ItemListContainer from './components/body/itemListContainer/itemListContainer';
import ApiChallenge from './components/body/apiComponent/apiChallenge'
import Test from './components/body/test/test';
import  { CartProvider } from './context/cartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const NewContext = React.createContext();

let greeting="Esta es la greeting que se importo desde App.js"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={greeting}/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer greeting={greeting}/>}/>
          <Route exact path="/item/:itemID" element={<ItemDetail/>}/>
          <Route exact path="/pokeapi" element={<ApiChallenge/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route path="/*" element={<h1>404</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;