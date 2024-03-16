import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = "http://localhost:8000/products/"


const CompShowProducts = () => {
    const [products, setProduct] = useState([])
    useEffect( ()=>{
        getProducts()
    },[])

    // mostrar todos los prods

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProduct(res.data)
    }

    // eliminar un prod

    const deleteProduct = async (id) => {
        axios.delete(`${URI}${id}`)
        getProducts()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col mt-5'>

                <Link to="/create" className="btn btn-primary"><i className="fa-solid fa-plus"></i> </Link>                    

                <table className='table table table-sm mt-3'>
                    <thead className='table-primary table-sm'>
                        <tr>
                            <th>NAME</th>
                            <th>SKU</th>
                            <th>ACTIONS</th>
                        </tr>

                    </thead>
                    <tbody>
                        { products.map ( (product) => ( 
                        
                            <tr key={product.id}>
                                
                                <td>{ product.name }</td>
                                <td>{ product.sku }</td>
                                <td className="text-center">

                                    <button type="button" className="btn btn-info btn-sm"><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button type="button" className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
                                    
                                </td>

                            </tr>

                        
                        
                        )) }

                    </tbody>
                </table>



                </div>
            </div>
        </div>
    )

}

export default CompShowProducts
