import React from 'react';
import './Characters.css';

const Characters =({ characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4 suCard">
                            <div className="card ">
                                <img src={item.image} alt="Imagen" />
                                <div className="card-body">
                                    <h6 className="card-title">{item.name}</h6>
                                    <hr />
                                    <p>SPECIES: {item.species}</p>
                                    <p>LOCATION: {item.location.name.split('(')[0]}</p>

                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;