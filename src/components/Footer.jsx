import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px',bottom:'0px',zIndex:'900'}} className='container-fluid w-100 bg-info p-5'>
      <div className="d-flex justify-content-between flex-wrap">
        <div style={{ width: '400px',color:'white'}} className="intro">
          <h5 className='fw-bolder'><i className="fa-solid fa-truck-fast me-2"></i>FF Store</h5>
          <p >Designed and built with all the love in the world by the Bootstrap team with
            the help of our contributors.
          </p>
          <p>Code licensed MIT,docs CC BY 3.O.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column" style={{color:'white'}}>
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
        </div>
        <div className="guides  d-flex flex-column" style={{color:'white'}}>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>Routing</a>

        </div>
        <div className="contact" style={{color:'white'}}>
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text" className="p-2" />
            <button className="btn btn-info ms-2 bg-warning"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3' style={{color:'white'}}>Copyright &copy; 2024 Media Player.Built with React.</p>
    </div>
  )
}

export default Footer