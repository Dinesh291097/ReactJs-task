import React from 'react'
import { Sample } from './Sample'
import { Link } from 'react-router-dom'


const Card = () => {
    const cart = Sample
    // console.log(cart);
   const display= JSON.parse(localStorage.getItem('user'))
   const store=display[0].uname
//    console.log(store);

    return (
        <>
         <div>
        <h3 className='username'>Hello {store}</h3>
    </div>
        <div className='container-fluid'>
            <div className='row row-cols-3 g-3'>
               
                {cart.slice(0,6).map((index) => (
                    <div className="col">
                        <div class="card" className='product border border-dark h-100 ' style={{ width: '18rem'}}>
                            <div className="card-body bg-light" >
                                <h5 class="card-title" className='brand1'>{index.brand}</h5>
                                <div>
                                    <Link to={`/card/${index.id}`}>
                                        <img src={index.images[0]} className='image img-fluid' />
                                    </Link>

                                </div>
                                <p class="card-text" className='detail'>{index.description}</p><hr></hr>
                                <h6 href="#" class="card-text" className='discount'>Discount:{index.discountPercentage}%</h6>
                                <h6 href="#" class="card-text" className='price'>Price:${index.price}</h6><hr></hr>
                                <div className=''>
                                    <button className='btn btn-warning'>Add to Cart</button>&nbsp;
                                    <button className='btn btn-success'>Buy Now!</button>
                                </div>


                            </div>
                        </div>
                    </div>


                ))}
            </div>

        </div>

        </>
       

    )
}

export default Card