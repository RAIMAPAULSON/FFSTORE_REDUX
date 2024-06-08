import React from 'react'
import Header from '../components/Header'

const Cart = () => {
  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:'150px'}}>
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
      <tr>
        <td>1</td>
        <td>iphone</td>
        <td><img height={'50px'} width={'50px'} src="https://tiimg.tistatic.com/fp/1/007/574/vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg" alt="product" /></td>
        <td>
          <div className="d-flex">
            <button className='btn fw-bolder'>-</button>
            <input value={10} type="text" style={{width:'50px'}} className='fw-bolder me-1 ms-' readOnly />
            <button className='btn fw-bolder'>+</button>
          </div>
        </td>
        <td>$450</td>
        <td>
          <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </td>
      </tr>
    </tbody>
    </table>
    </div>
    <div className="col-lg-4"></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cart