import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/products/'

const CompCreateProduct = () => {
    const [name, setName] = useState('')
    const [sku, setSku] = useState('')
    const [category, setCategory] = useState('')
    const [qty, setQty] = useState('')    
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, sku: sku, category: category, qty: qty, price: price})
        navigate('/')

    }
    return (
        <div className="mt-5">
            <div className="text-center container">
                <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h3>Crear Producto</h3>
                    <form onSubmit={store}>
                    <div className="mt-5">
                        <input value={name} onChange={ (e)=> setName(e.target.value)} type="text" className="form-control mt-3" placeholder='Name'/>
                        <input value={sku} onChange={ (e)=> setSku(e.target.value)} type="text" className="form-control mt-3" placeholder='Sku'/>
                        <input value={category} onChange={ (e)=> setCategory(e.target.value)} type="text" className="form-control mt-3" placeholder='Category'/>
                        <input value={qty} onChange={ (e)=> setQty(e.target.value)} type="text" className="form-control mt-3" placeholder='Qty'/>
                        <input value={price} onChange={ (e)=> setPrice(e.target.value)} type="text" className="form-control mt-3" placeholder='Price'/>
                        <button type="submit" className='btn btn-primary float-right mt-3'>Guardar</button>
                    </div>
                </form>     
                </div>                                                      
                <div className="col-lg-4"></div>                                   
                </div>
            </div>              
        </div>
    )
}

export default CompCreateProduct



