import React, { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../service/RickAndMorty.service";

const Detail = () => {

  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
      .then((data) => setPersonaje(data))
  }, [])

  console.log(personaje);



  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {personaje.species}
            </strong>
            <h3 className="mb-0 text-dark">{personaje.name} </h3>
            <div className="mb-1 text-muted">
             Personaje creado el: {new Date(personaje.created).toLocaleDateString()}
            </div>
            <p>Curabitur laoreet posuere consequat. Cras quis feugiat leo. Mauris dapibus dictum ipsum, convallis interdum sem consequat sit amet. Nulla ac ex turpis. Sed facilisis congue justo, sit amet auctor ligula varius et. Mauris nec sapien blandit, tristique lacus venenatis, rhoncus sapien. Phasellus vitae augue in mi porta laoreet eu quis massa. Sed dignissim massa et ultricies ornare.

            </p>
            
            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">Volver</Link>
          </div>

          <img className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4" height="auto" src={personaje.image} alt="" />

        </div>
      </div>
      
    </div>
  )
}

export default Detail
