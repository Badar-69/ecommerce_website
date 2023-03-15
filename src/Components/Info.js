import React from 'react'


export default function Info() {
    return (
        <>
            <div className="info">
                <div className="info-details">

                    <div className="dropdown">
                        <button className="dropbtn">English</button> <i className="angle-1 fa-solid fa-chevron-down"></i>
                        <div className="dropdown-content">
                            <a href="/">English</a>
                            <a href="/">French</a>
                            <a href="/">Germany</a>
                        </div>
                        <span className="vl"></span>
                    </div>

                    <div className="dropdown-2">
                        <button className="dropbtn-2">USD</button> <i className="angle-2 fa-solid fa-chevron-down"></i>
                        <div className="dropdown-content-2">
                            <a href="/">USD</a>
                            <a href="/">EUR</a>
                            <a href="/">GBP</a>
                        </div>
                        <span className="vl"></span>
                    </div>

                    <p className="info-para">Call Us 3965410</p>

                    <p className="para-deliver">Free delivery on order over <span className='del-price'>$200.00</span></p>
                </div>
            </div>
            <hr className='line' />
        </>
    )
}
