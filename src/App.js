import './App.css';
import CompShowProducts from './inventario/ShowProducts';
import CompCreateProduct from './inventario/CreateProduct';
import CompEditProduct from './inventario/EditProduct';
import "bootswatch/dist/darkly/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CompShowProducts />} />
        <Route path='/create' element={ <CompCreateProduct />} />
        <Route path='/edit/:id' element={ <CompEditProduct />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
