import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/products/'

const CompEditProduct = () => {
    const [sku, setSku] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [qty, setQty] = useState("")    
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            sku: sku,
            name: name,
            category: category,
            qty: qty,            
            price: price
        })
        navigate('/')
    }

    useEffect( ()=>{
        getProductById()
    },[])

    const getProductById = async () => {
        const res = await axios.get(URI+id)
        setSku(res.data.sku)
        setName(res.data.name)
        setCategory(res.data.category)
        setQty(res.data.qty)
        setPrice(res.data.price)

    }

    return (
        <div>

            <div className="row">

            <div className="col-lg"></div>
            <div className="col-lg">
            <h3 className="mt-5">Edit Product </h3>                
            <form onSubmit={update}>
                <div className='mb-3'>
                    <input value={sku || ""} onChange={(e)=>setSku(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <input value={name || ""} onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className='mb-3'>
                    <input value={category || ""} onChange={(e)=>setCategory(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <input value={qty || ""} onChange={(e)=>setQty(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <input value={price || ""} onChange={(e)=>setPrice(e.target.value)} type="text" className="form-control"/>
                </div>                                  
                <button type="submit" className="btn btn-primary">Update</button>                                                                
            </form>                
            </div>
            </div>
        </div>
    )

}

export default CompEditProduct
