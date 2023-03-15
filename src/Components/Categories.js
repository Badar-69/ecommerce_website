import React from 'react'


export default function Categories({ uniquelist, filteritem }) {
    return (
        <>
            <div className="category">
                <div className="search">
                    <p className="para-search">Search</p>
                    <input type="text" className='search-bar' placeholder='Search here...' />
                    <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="categories categories-1">
                    <p className='para-cate-2'>Categories</p>

                    <div className="checkboxes">


                        {uniquelist && uniquelist.map((val, index) => {
                            return <div className="check" key={index}><input onClick={() => filteritem(val)} type="checkbox" /><span className='span-cate'> {val}</span></div>
                        })}

                        {/* <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> All Categories</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Fashion</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Men</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Women</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Electronics</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Furniture</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Plant</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Organic Food</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Flower</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Book</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Cosmetics</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Kids</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Auto Parts</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Cakes</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Pet Food</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Medical</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Black Friday</span></div>
                    <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Christmas</span></div> */}
                    </div>
                </div>


                <div className="categories categories-2">
                    <p className='para-cate-2'>Color</p>

                    <div className="checkboxes">
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> All Colors</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> White</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Bliack</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Brown</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> Blue</span></div>
                    </div>
                </div>


                <div className="categories categories-3">
                    <p className='para-cate-2'>Size</p>

                    <div className="checkboxes">
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> All Sizes</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> X</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> M</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> XL</span></div>
                        <div className="check"><input type="checkbox" name="" id="" /><span className='span-cate'> XXL</span></div>
                    </div>
                </div>


                <div className="categories categories-4">
                    <p className='para-cate-2'>Tag</p>

                    <div className="buttons">
                        <div><button className='tags'>Fashion</button></div>
                        <div><button className='tags'>Men</button></div>
                        <div><button className='tags'>Jacket</button></div>
                        <div><button className='tags'>Full Sleves</button></div>
                        <div><button className='tags'>Women</button></div>
                        <div><button className='tags'>Coat</button></div>
                        <div><button className='tags'>Top</button></div>
                        <div><button className='tags'>Sleveless</button></div>
                        <div><button className='tags'>Electronics</button></div>
                        <div><button className='tags'>Furniture</button></div>
                        <div><button className='tags'>Plant</button></div>
                        <div><button className='tags'>Organic Food</button></div>
                        <div><button className='tags'>Flower</button></div>
                        <div><button className='tags'>Book</button></div>
                        <div><button className='tags'>Cosmetics</button></div>
                        <div><button className='tags'>Accessories</button></div>
                        <div><button className='tags'>Handmade</button></div>
                        <div><button className='tags'>Kids</button></div>
                        <div><button className='tags'>Auto Parts</button></div>
                        <div><button className='tags'>Cakes</button></div>

                    </div>
                </div>
            </div>
        </>
    )
}
