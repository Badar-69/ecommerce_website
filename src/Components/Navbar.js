import React from 'react'
import { useState } from 'react';
import Logo from '../images/logo.png';
import DropImg from '../images/drop-img.png'
// import Card from '../Components/Card'
// import Categories from '../Components/Categories';



export default function Navbar({ CartCount, cartItems }) {
    const [show, setShow] = useState(false);
    console.log(cartItems.prNew)
    // const price=parseInt(cartItems.price);
    const totalPrice = cartItems.reduce((a, c) => a + c.prNew * c.qty, 0)
    return (
        <>
            <div className="navbar">
                <img className='logo' src={Logo} alt="Company logo" />

                <span className="drp-down">

                    <div className="dropdown-3">
                        <button href className="btn-all dropbtn-3">Home
                            <i className="angle fa-solid fa-chevron-down"></i>
                        </button>
                        <div className="dropdown-content-3">
                            <div className="row">
                                <div className="column">
                                    <h5 className='drop-heading'>HOME GROUP ONE</h5>
                                    <a className='drop-links' href="/">Home Fashion</a>
                                    <a className='drop-links' href="/">Home Fashion Two</a>
                                    <a className='drop-links' href="/">Home Fashion Three</a>
                                    <a className='drop-links' href="/">Home Fashion Four</a>
                                    <a className='drop-links' href="/">Home Fashion Five</a>
                                    <a className='drop-links' href="/">Home Fashion Six</a>
                                    <a className='drop-links' href="/">Home Fashion Seven</a>
                                    <a className='drop-links' href="/">Home Fashion Eight</a>
                                    <a className='drop-links' href="/">Home Kids Fashion</a>
                                    <a className='drop-links' href="/">Home Cosmetics</a>
                                    <a className='drop-links' href="/">Home Furniture</a>
                                    <a className='drop-links' href="/">Home Furniture Two</a>
                                    <a className='drop-links' href="/">Home Furniture Three</a>
                                    <a className='drop-links' href="/">Home Furniture Four</a>
                                </div>
                                <div className="column">
                                    <h5 className='drop-heading'>HOME GROUP TWO</h5>
                                    <a href="/">Home Furniture Five</a>
                                    <a href="/">Home Fashion Six</a>
                                    <a href="/">Home Fashion Seven</a>
                                    <a href="/">Home Electronics</a>
                                    <a href="/">Home Fashion Two</a>
                                    <a href="/">Home Fashion Three</a>
                                    <a href="/">Home Book Store</a>
                                    <a href="/">Home Book Store Two</a>
                                    <a href="/">Home Plants</a>
                                    <a href="/">Home Flower Shop</a>
                                    <a href="/">Home Flower Shop Two</a>
                                    <a href="/">Home Organic Food</a>
                                    <a href="/">Home Organic Food Two</a>
                                    <a href="/">Home Onepage Scroll</a>
                                </div>
                                <div className="column">
                                    <h5 className='drop-heading'>HOME GROUP THREE</h5>
                                    <a href="/">Home Grid Banner</a>
                                    <a href="/">Home Auto Parts</a>
                                    <a href="/">Home Cake Shop</a>
                                    <a href="/">Home Handmade</a>
                                    <a href="/">Home Pet Food</a>
                                    <a href="/">Home Medical Equipment</a>
                                    <a href="/">Home Christmas</a>
                                    <a href="/">Home Black Friday</a>
                                    <a href="/">Home Black Friday Two</a>
                                    <a href="/">Home Valentines Day</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown-4">
                        <button className="btn-all dropbtn-4">Shop
                            <i className="angle fa-solid fa-chevron-down"></i>
                        </button>
                        <div className="dropdown-content-4">
                            <div className="row-2">
                                <div className="column-2">
                                    <h5 className='drop-heading-2'>SHOP LAYOUT</h5>
                                    <a className='drop-links-2' href="/">Shop Grid Standard</a>
                                    <a className='drop-links-2' href="/">Shop Grid Filter</a>
                                    <a className='drop-links-2' href="/">Shop Grid Two Column</a>
                                    <a className='drop-links-2' href="/">Shop Grid No Sidebar</a>
                                    <a className='drop-links-2' href="/">Shop Grid Full Width</a>
                                    <a className='drop-links-2' href="/">Shop Grid Right Sidebar</a>
                                    <a className='drop-links-2' href="/">Shop List Standard</a>
                                    <a className='drop-links-2' href="/">Shop List Full Width</a>
                                    <a className='drop-links-2' href="/">Shop List Two Column</a>
                                </div>
                                <div className="column-2">
                                    <h5 className='drop-heading-2'>PRODUCT DETAILS</h5>
                                    <a href="/">Product Tab Bottom</a>
                                    <a href="/">Product Tab Left</a>
                                    <a href="/">Product Tab Right</a>
                                    <a href="/">Product Sticky</a>
                                    <a href="/">Product Slider</a>
                                    <a href="/">Product Fixed Image</a>
                                    <a href="/">Prodcut Simple</a>
                                    <a href="/">Product Variation</a>
                                    <a href="/">Product Affiliate</a>
                                </div>
                                <div className="column-2">
                                    <img className='drop-img' src={DropImg} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <button className="btn-all dropbtn-5">Collection</button>

                    <div className=" dropdown-6">
                        <button className="btn-all dropbtn-6">Pages</button> <i className="angle fa-solid fa-chevron-down"></i>
                        <div className="dropdown-content-6">
                            <a href="/">Cart</a>
                            <a href="/">Checkout</a>
                            <a href="/">Wishlist</a>
                            <a href="/">Compare</a>
                            <a href="/">My Account</a>
                            <a href="/">Login / Register</a>
                            <a href="/">About Us</a>
                            <a href="/">Contact Us</a>
                            <a href="/">404 Page</a>
                        </div>
                    </div>

                    <div className="dropdown-7">
                        <button className="btn-all dropbtn-7">Blog</button> <i className="angle fa-solid fa-chevron-down"></i>
                        <div className="dropdown-content-7">
                            <a href="/">Blog Standard</a>
                            <a href="/">Blog No Sidebar</a>
                            <a href="/">Blog Right Sidebar</a>
                            <a href="/">Blog Details Standard</a>
                        </div>
                    </div>

                    <button className="btn-all dropbtn-8">Contact Us</button>
                </span>

                <span className="nav-icons">
                    <i className="icons fa-solid fa-magnifying-glass"></i>
                    <i className="icons fa-regular fa-circle-user"></i>
                    <i className="icons fa-solid fa-shuffle"></i><span className='count-span'>0</span>
                    <i className="icons fa-regular fa-heart"></i><span className='count-span'>0</span>
                    <i onClick={() => setShow(!show)} className="icons fa-solid fa-bag-shopping"></i><span className='count-span'>{CartCount}</span>


                </span>


            </div>
            {show ? <div className="toggle">
                {cartItems && cartItems.map((val) => {
                    return (

                        <div className="innerMain">
                            <img src={val.image} alt="prodImg" className='cartImg' />
                            <div className="cartText">
                                <p className='cartItemName'>{val.name}</p>
                                <p className='quantity'>Qty : {val.qty}</p>
                                <p className='cartItemPrice'>$ {val.prNew}</p>
                                <p className='cartItemColor'>Color : White</p>
                                <p className='cartItemSize'>Size : x</p>

                            </div>
                        </div>

                    )
                })
                }

                <div className="downMain">
                    <p className="total">Total :  <span className='tt-price'> ${totalPrice}</span></p>
                </div>

                <div className="button-1">
                    <button className="innerBtn">VIEW CART</button>
                </div>

                <div className="button-2">
                    <button className="innerBtn">CHECKOUT</button>
                </div>

            </div> : null
            }

            <div className="main">

                {/* { <Categories filteritem={props.filteritem} uniquelist={props.uniquelist} />}

                { <Card mainData={props.mainData} />} */}
            </div>

        </>
    )
}
