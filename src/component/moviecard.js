import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom' ;

function Moviecard({el}) {
    return (
        <div   className="car" >
            <h1>{el.title}</h1>
            <p>{el.description} </p>
            <img src={el.posterUrl} alt=""/>
            <ReactStars count={5} value={el.rate} size={24} activeColor="red" />
    <Link to={`/Trailer/${el.id}`}> 
    <button>Trailer</button>
    </Link>

        </div>
    )
}

export default Moviecard
