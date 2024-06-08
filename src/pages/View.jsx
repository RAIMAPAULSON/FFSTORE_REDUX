import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/Slices/wishlistSlice'
const View = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams()
  console.log(product);
  const userWishlist = useSelector(state=>state.wishlistReducer)
  console.log(userWishlist);
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("allProducts")){
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  const handleWishlist=()=>{
    if(userWishlist?.includes(product)){
      alert("Item already in your wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <div>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}} className='container d-flex align-items-center w-100'>
    <div className="row align-items-center mb-2 w-100">
    <div className="col-lg-5">
      <img height={'400vh'} className='w-100' src={product?.thumbnail} />
    </div>
    <div className="col-lg-1"></div>
    <div className="col-lg-6">
      <h5>{product?.id}</h5>
      <h1>{product?.title}</h1>
      <h3 className='fw-bolder text-danger'>${product?.price}</h3>
      <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description : </span>
      {product?.description}</p>
      <div className="d-flex justify-content-between mt-3">
       <button onClick={handleWishlist} className='btn btn-outline-dark'><i className="fa-solid fa-heart text-danger me-1"></i>Add to wishlist</button>
       <button className='btn btn-outline-dark'><i className="fa-solid fa-cart-plus text-success me-1"></i>Add to cart</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default View