import React, { useEffect, useState } from "react"
import  Card  from "./Card"
import RickAndMortyService from "../../service/RickAndMorty.service";


const Cards = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(()=> {
    RickAndMortyService.getAllCharacters()
      .then((data)=> setPersonajes(data.results
        ))
      .catch((error) => console.log(error));
    
  }, [personajes])



  const cardsList = personajes.map((p) => <Card personaje = {p} key ={p.id} />)

  return (
    <div className="album py-5 bg-body-tertiary">
          <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              
              {cardsList}
              
            </div>
          </div>
        </div>
  )
}

export default Cards
