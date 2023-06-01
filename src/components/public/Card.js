import React from "react"
import { Link } from "react-router-dom"

const Card = ({personaje}) => {
  return (
    <div className="col">
        <div className="card shadow-sm">
            <img whidt="100%" src={personaje.image} alt="imagen" />
            <h3 className="mb-0 text-dark"> {personaje.name} </h3>
            <div className="card-body">
                <p className="card-text">
                Especie: <strong>{personaje.species}</strong> <br/>
                Género: <strong>{personaje.gender}</strong></p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            <Link to={`/detail/${personaje.id}`} className="nav-link">Detalle</Link>
                        </button>
                    </div>
                    <small className="text-body-secondary">{personaje.status}</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
