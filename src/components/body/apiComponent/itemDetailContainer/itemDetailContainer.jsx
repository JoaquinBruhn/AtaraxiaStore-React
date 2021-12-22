import React from "react";

import'./itemDetailContainer.css'


function ItemDetailContainer({pokemonData}){

    return(
        <div className="poke-chart">
            <h4>{pokemonData.name}</h4>
            <div className="product-details">
                <h5>Pokemon info:</h5>
                <img src={pokemonData.sprites.front_default} alt="sprite" />
                <h6>Abilitys:</h6>
                <div>
                    {
                        pokemonData.abilities.map((el, index)=><p key={index}>{el.ability.name}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer