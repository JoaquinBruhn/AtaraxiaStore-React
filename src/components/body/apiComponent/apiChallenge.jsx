import React, {useEffect, useState} from "react";
import ItemDetailContainer from "./itemDetailContainer/itemDetailContainer";
import {Container, Row} from "react-bootstrap"

import'./apiChallenge.css'


function ApiChallenge(){

    const[pokemon, setPokemon] = useState("bulbasaur")
    const [pokemonData, setPokemonData] = useState(null)



    useEffect(()=>{
        setTimeout(()=>{
            pokeFetch(pokemon)
        },1000)
    },[pokemon])

    async function pokeFetch (pokemon){
        try{
            const call =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const result = await call.json();
            setPokemonData(result)
            }
            catch(error){
                let err = false
                return setPokemonData(err) 
            }
    }

    async function formHandler(e){
        e.preventDefault()

        setPokemon(e.target.pokemonInput.value)
    }


    return(
    <Container>
        <Row>
            <div className="content">
                <h3>Pokemon display</h3>
                {
                    pokemonData===null? <h5>Cargando ...</h5> 
                    :
                    pokemonData? 
                        <ItemDetailContainer pokemonData={pokemonData}/> 
                        : 
                        <h5>Escribiste mal el pokemon</h5>
                }
                <form onSubmit={formHandler}>
                    <input type="text" placeholder="Type a pokemon" id="pokemonInput" />
                    <input type="submit" />
                </form>
            </div>            
        </Row>
    </Container>
    )
} 

export default ApiChallenge