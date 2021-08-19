import React from 'react'
import '../styles/Card.css';
import image1 from '../assets/images/img-1.jpg'
import image2 from '../assets/images/img-2.jpg'
import image3 from '../assets/images/img-3.jpg'
import image4 from '../assets/images/img-4.jpg'
import image5 from '../assets/images/img-5.jpg'
//import image1 from '../assets/images/img-1'
import CardItem from './CardItem'

function Card() {
    return (
        <div className="cards">
            <h1>Check Out These EPIC Destinations !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={image1}
                        text="Explore the unique place in Timor Leste"
                        label='Places'
                        path='/services'
                        />
                        <CardItem
                        src={image2}
                        text="Explore the sunset and sunrise in Timor Leste"
                        label='Nature'
                        path='/services'
                        />
                    </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src={image3}
                            text="Explore the alliagator in Timor Leste"
                            label='Alligators'
                            path='/services'
                            />
                            <CardItem
                            src={image4}
                            text='Experience the Sea of Timor Leste'
                            label='Ocean'
                            path='/products'
                            />
                            <CardItem
                            src={image5}
                            text='Ride through the forest of Timor Leste'
                            label='Adrenaline'
                            path='/sign-up'
                            />
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
