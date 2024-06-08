import React from 'react'
import Header from '../components/Header'
import { Card,Row,Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/Slices/wishlistSlice'
import { addToCart } from '../redux/Slices/cartSlice'

const Wishlist = () => {
  const yourWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
  return (
    <>
    <Header/>
    <div style={{ marginTop: '150px' }} className="container-fluid">
      {
      yourWishlist?.length>0?
        <div>
        <h3 className='text-danger'>Your Wishlist</h3>
          <Row className='my-5'>
                      {yourWishlist?.map(item=>(
                        <Col key={item?.id} className='mb-5 me-2' sm={12} md={6} lg={4} xl={3}>
                          <Card className='shadow rounded' style={{ width: '18rem' }}>
                              <Card.Img height={'180px'} variant="top" src={item?.thumbnail} />
                              <Card.Body>
                                  <Card.Title>{item?.title.slice(0,20)}...</Card.Title>
                                  <div className='text-center mt-3 d-flex justify-content-between'>
                                  <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn'><i className="fa-solid fa-heart-circle-xmark text-danger"></i></button>
                                  <button className='btn'><i className="fa-solid fa-cart-plus text-success"></i></button>
                                  </div>
                              </Card.Body>
                          </Card>
                      </Col>
                      ))
                      }
          </Row>
      </div>
      :
      <div style={{height:'60vh'}} className='d-flex justify-content-center align-items-center flex-column mb-5'>
      <img width={'400px'} height={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-8664444-6909519.png?f=webp" alt="empty" />
      <h3 className='text-danger'>Your wishlist is empty!!!</h3>
      </div>
      }
            </div>
    </>
  )
}

export default Wishlist