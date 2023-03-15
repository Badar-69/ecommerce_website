import React from 'react'
import { useLocation } from 'react-router-dom';


export default function Det() {
    const location = useLocation();
    const productDetails = location.state.productDetails;
    return (
        <>
            {
                <div className="singleComp">
                    <div className="start-det">
                        <div className="productimg">
                            <img className='det-img' src={productDetails.image} alt="" />
                        </div>

                        <div className="prodDetails">
                            <p className="prodName">{productDetails.name}</p>
                            <span className="prodPriceNew">{productDetails.prNew}</span>
                            <span className="prodPriceOld">{productDetails.prOld}</span>
                            <p className="discription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo incidunt exercitationem quibusdam iure praesentium at reiciendis. Odio ullam dolorem est, et quae perspiciatis repellat.</p>

                            <div className="likings">
                                <div className="color">
                                    <p>Color</p>
                                    <span className="white"></span>
                                    <span className="black"></span>
                                    <span className="red"></span>
                                </div>
                                <div className="size">
                                    <p>Size</p>
                                    <span>S</span>
                                    <span>M</span>
                                    <span>X</span>
                                    <span>XL</span>
                                </div>
                            </div>

                            <div className="inc-dec">
                                <span>+</span><span className='inc-dec-qty'>1</span><span >-</span>
                            </div>

                                
                            <button className="det-btn">ADD TO CART</button>
                        </div>


                    </div>



                </div>

            }



        </>
    )
}
