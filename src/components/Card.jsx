import React from 'react';
import {useSelector} from "react-redux";

const Card = () => {
    const {type,current:data} = useSelector(store => store.star)


    return (
        <div className="card">
            { data.name &&
                <p className="card__text">name:{data.name}</p>
            }
            { data.model && type === "starships" &&
                <p className="card__text">model:{data.model}</p>
            }
            { data.manufacturer && type === "starships" &&
                <p className="card__text">manufacturer:{data.manufacturer}</p>
            }
            { data.rotation_period && type === "planets" &&
                <p className="card__text">rotation period:{data.rotation_period}</p>
            }
            { data.diameter && type === "planets" &&
                <p className="card__text">diameter{data.diameter}</p>
            }
            { data.mass && type === "people" &&
                <p className="card__text">mass:{data.mass}</p>
            }
            { data.height && type === "people" &&
                <p className="card__text">height:{data.height}</p>
            }
        </div>
    );
};

export default Card;
