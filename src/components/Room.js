import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg'
import PropTtypes from 'prop-types';

function Room({ room }) {

    const { name, slug, images, price } = room;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="single room" />
                <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
                </div>
                
                <Link to = {`/rooms/${slug}`} 
                className="btn-primary  room-link">
                  Features  
                </Link>
            </div>
    <p className ="room-info">{name}</p>
        </article>
    );
}

Room.PropTtypes = {
    room:PropTtypes.shape({
        name:PropTtypes.string.isRequired,
        slug:PropTtypes.string.isRequired,
        images:PropTtypes.arrayOf(PropTtypes.string).isRequired,
        price:PropTtypes.number.isRequired,
    })
}

export default Room;
