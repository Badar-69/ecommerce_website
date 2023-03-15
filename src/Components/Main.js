import React from 'react'
import Categories from '../Components/Categories'
import Card from '../Components/Card'

export default function Main(props) {
    return (
        <>
            <div className="main">
                {<Categories filteritem={props.filteritem} uniquelist={props.uniquelist} />}

                {<Card mainData={props.mainData} onAdd={props.onAdd} />}
            </div>

        </>
    )
}
