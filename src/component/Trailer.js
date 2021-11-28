import React from 'react'

function Trailer(props) {
const Trailers =props.movies.find ((el)=> el.id == props.match.params.id ) ;

    return (
        <div  className="movieTrailer" >

            
            <p>
                 {Trailers.description} </p> 
                 
            <div className="imageh1" >
<h1> { Trailers.title } </h1> 
                 <img  width="800" height="800"   src={Trailers.posterUrl} /> 

                 <iframe   width="800" height="500" src={Trailers.trailer} ></iframe>
        </div>
        </div>
    );
}

export default Trailer ;


