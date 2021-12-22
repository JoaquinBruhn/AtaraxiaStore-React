import NavBar from './components/navbar/NavBar';
import ItemDetail from './components/body/itemDetail/itemDetail'
import ItemListContainer from './components/body/itemListContainer/itemListContainer';
import ApiChallenge from './components/body/apiComponent/apiChallenge'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let greeting="Esta es la greeting que se importo desde App.js"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={greeting}/>}/>
            <Route exact path="/category/:#calzado" element={<ItemListContainer greeting={greeting}/>}/>
            <Route exact path="/item/id" element={<ItemDetail/>}/>
            <Route exact path="/pokeapi" element={<ApiChallenge/>}/>
            <Route path="/*" element={<h1>404</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
