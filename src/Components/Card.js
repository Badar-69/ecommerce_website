import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Card({ mainData, onAdd }) {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div className="page-down">
                    <select className='pg-select' name="default">
                        <option value="1">Default</option>
                        <option value="2">Price - High to Low</option>
                        <option value="3">Price - Low to High</option>
                    </select>

                    <span className="span-result">Showing 30 of 144 result</span>
                </div>
                <div className="main-card">
                    {
                        mainData.map((item) => {
                            return (
                                <div className='cards' key={item.id}>
                                    <div className="card">
                                        <span className="span-pink">{item.disc}</span>
                                        <div className="img-main">
                                            <img className='card-img' src={item.image} alt="cimage" />

                                            <div className="options">
                                                <button className='btn-left btn-opt'>
                                                    <i className="opt-icon fa-regular fa-heart"></i>
                                                </button>

                                                <div className="view">
                                                    <a className='view-link' onClick={() => onAdd(item)}>Add To Cart</a>
                                                </div>


                                                <button onClick={() => navigate('/details', { state: { productDetails: item } })} className='btn-right btn-opt'>
                                                    <i className="opt-icon fa-regular fa-eye"></i>
                                                </button>


                                            </div>
                                        </div>


                                        <div className="card-text">
                                            <div className="ratings">
                                                <p className="para-card">{item.name}</p>
                                                <i className="star-icon fa-regular fa-star"> </i>
                                                <i className="star-icon fa-regular fa-star"></i>
                                                <i className="star-icon fa-regular fa-star"></i>
                                                <i className="star-icon fa-regular fa-star"></i>
                                                <i className="star-icon fa-regular fa-star"></i>
                                            </div>
                                            <div className="product-prize">
                                                <span className='new'>${item.prNew} - <span className='old'>${item.prOld}</span></span>
                                            </div>
                                        </div>



                                    </div>

                                </div>


                            )


                        })
                    }
                </div>

                <div className="pagination">
                    <span className='page-span page-span-active'>1</span>
                    <span className='page-span'>2</span>
                    <span className='page-span'>3</span>
                    <span className='page-span'>4</span>
                    <span className='page-span'>5</span>
                    <span className='page-span'>6</span>
                    <span className='page-span'>7</span>
                    <span className='page-span'>8</span>
                    <span className='page-span'>9</span>
                    <span className='page-span'>10</span>

                </div>
            </div>
        </>
    )
}