import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../redux/Slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'


const Cart = () => {
const [totalPrice,setTotalPrice] = useState(0)
const cartDisplay = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()
const navigate = useNavigate()
const handleDecrement=(product)=>{
 if(product.quantity>1){
   dispatch(decQuantity(product.id))
 }else{
   dispatch(removeCartItem(product.id))

 }
}
const checkOut=()=>{
  dispatch(emptyCart())
  alert("Your order is successfully placed....Thank you for purchasing with us")
  navigate('/')
}
useEffect(()=>{
if(cartDisplay?.length>0){
 setTotalPrice(cartDisplay?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
}else{
  setTotalPrice(0)
}
},[cartDisplay])
  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:'150px'}}>
    
    { cartDisplay?.length>0?
      <div className="cart">
    <h1>Cart Summary</h1>
    <div className="row mt-4">
    <div className="col-lg-8">
    <table className="table shadow">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Image</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>...</th>
    </tr>
    </thead>
    <tbody>
      {cartDisplay?.map((product,index)=>(
        <tr key={product?.id}>
        <td>{index+1}</td>
        <td>{product?.title.slice(0,20)}...</td>
        <td><img height={'50px'} width={'50px'} src={product?.thumbnail} alt="product" /></td>
        <td>
          <div className="d-flex">
            <button onClick={()=>handleDecrement(product)} className='btn fw-bolder'>-</button>
            <input value={product?.quantity} type="text" style={{width:'50px'}} className='fw-bolder me-1 ms-' readOnly />
            <button onClick={()=>dispatch(incQuantity(product?.id))} className='btn fw-bolder'>+</button>
          </div>
        </td>
        <td>${product?.totalPrice}</td>
        <td>
          <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </td>
      </tr>
      ))}
    </tbody>
    </table>
    <div className='float-end mb-3'>
     <button className='btn btn-danger me-2' onClick={()=>dispatch(emptyCart())}>EMPTY CART</button>
     <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
    </div>
    </div>
    <div className="col-lg-4">
    <div className="border rounded p-3">
    <h4>Total Amount: <span className='text-danger'>${totalPrice}</span></h4>
    <hr />
    <div className="d-grid">
      <button onClick={checkOut} className='btn btn-success'>CheckOut</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    :
    <div style={{height:'60vh'}} className='d-flex justify-content-center align-items-center flex-column mb-5'>
      <img width={'400px'} height={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-8664444-6909519.png?f=webp" alt="empty" />
      <h3 className='text-danger'>Your Cart is empty!!!</h3>
      </div>
    }
    
    </div>
    </>
  )
}

export default Cart