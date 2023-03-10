import React from 'react';
import {useSelector} from "react-redux";
import {useUser} from "../context/userContext";

const Card = () => {
    const {type,current:data} = useSelector(store => store.star)
    const {dataLang} = useUser();
    return (
        <div className="card">
            { data.name &&
                <p className="card__text">{dataLang.card.name}:{data.name}</p>
            }
            { data.model && type === "starships" &&
                <p className="card__text">{dataLang.card.model}:{data.model}</p>
            }
            { data.manufacturer && type === "starships" &&
                <p className="card__text">{dataLang.card.manufacturer}:{data.manufacturer}</p>
            }
            { data.rotation_period && type === "planets" &&
                <p className="card__text">{dataLang.card.rotationPeriod}:{data.rotation_period}</p>
            }
            { data.diameter && type === "planets" &&
                <p className="card__text">{dataLang.card.diameter}{data.diameter}</p>
            }
            { data.mass && type === "people" &&
                <p className="card__text">{dataLang.card.mass}:{data.mass}</p>
            }
            { data.height && type === "people" &&
                <p className="card__text">{dataLang.card.height}:{data.height}</p>
            }
        </div>
    );
};

export default Card;
