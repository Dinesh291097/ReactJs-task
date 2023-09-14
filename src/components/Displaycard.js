import React from 'react'
import { useParams } from 'react-router'
import { Sample } from './Sample';
const Displaycard = () => {

  const {id} = useParams();
  const data = Sample
  const index = data.find(x => x.id.toString() === id)
  // console.log(index);
  return (
    <div className=' container-fluid'>
        <div class="card h-100" className='product'>
                            <div className="card-body bg-light" >
                                <h1 class="card-title" className='brand1'>{index.brand}</h1>
                                {/* <div>
                                    <Link to={`/card/${index.id}`}>
                                        <img src={index.images[0]} className='image' />
                                    </Link>

                                </div> */}
                                <div className='row'>
                                  <img src={index.images[0]} className='col-md-6 img-fluid'  />
                                </div>


                                <p class="card-text" className='detail'>{index.description}</p><hr></hr>
                                <h6 href="#" class="card-text" className='discount'>Discount:{index.discountPercentage}%</h6>
                                <h6 href="#" class="card-text" className='price'>Price:${index.price}</h6><hr></hr>
                                <h6>Details</h6>
                               <ul>
                                <li> Category- {index.category}</li>
                                <li> Rating- {index.rating}</li>
                                <li>Stock- {index.stock}</li>
                                <li>{index.thumbnail}</li>
                               </ul>
                                <div className='d-flex justify-content-end align-content-center'>
                                    <button className='btn btn-warning'>Add to Cart</button>&nbsp;
                                    <button className='btn btn-success'>Buy Now!</button>
                                </div>


                            </div>
                        </div>
    </div>
  )
}

export default Displaycard