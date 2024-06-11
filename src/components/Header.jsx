import React from 'react'
import { Container,Nav,Navbar,Badge} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/Slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const yourWishlist = useSelector(state=>state.wishlistReducer)
  const cartItems = useSelector(state=>state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand><Link to={'/'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}>
          <i className="fa-solid fa-truck-fast"></i>FF Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {insideHome &&
            <Nav.Link >
              <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} type="text" style={{width:'500px'}} className='rounded p-1' placeholder='Search products here!!!' />
            </Nav.Link>
          }
            <Nav.Link ><Link to={'/wishlist'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}>
            <i className="fa-solid fa-heart text-danger"></i>Wishlist <Badge>{yourWishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'} className='fw-bolder' style={{color:'white',textDecoration:'none'}}>
            <i className="fa-solid fa-cart-plus text-success"></i>Cart <Badge>{cartItems?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header