import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowProducts from './inventario/ShowProducts';
import CompCreateProduct from './inventario/CreateProduct';

import "bootswatch/dist/darkly/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={ <CompShowProducts />} />
        <Route path='/create' element={ <CompCreateProduct />} />
    
      </Routes>
    
    
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
