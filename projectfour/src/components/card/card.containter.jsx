import React from 'react'

export default function CardContainer(props) {
    return (

        // PRODUCTS PAGE 

        <div>
            <h4>{props.value.img}</h4>
            <h4>{props.value.title}</h4>
            <h4>{props.value.price}</h4>
            <h4>{props.value.longDesc}</h4>
            <h4>{props.value.shortDesc}</h4>
        </div>
    )
}
