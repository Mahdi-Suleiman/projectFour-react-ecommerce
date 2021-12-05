import React from 'react'
import Heroimg from '../heroImage/heroImage'
import Youtube from '../Api/Youtube/Youtube'
import Testimonial from '../Testimonials/Testimonial'
import CardContainer from '../card/card.containter'
export default function Homepage() {
    let storageProducts = JSON.parse(localStorage.getItem('products'))
    return (
        
            
                
                    <div className="container1"  >
                       <Heroimg />
                    <h1>{storageProducts.filter((element,index)=>index<3).map(data => <CardContainer value={data}/>)}</h1>
                        <Youtube />
                        <Testimonial />
                    
                    
                    </div>
            
        

    )
}