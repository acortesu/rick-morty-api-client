import "./App.css";
import React from "react";

function Character({ name, species, gender, origin, status, image }) {
  return (
    <div className="card">
      <img className="pic" src={image} alt={name} />
      {/* Aquí puedes agregar la imagen si la tienes */}
      <div className="card-info-cnt">
        <p className="card-title">{name}</p>
        <div className="row">
          <p className="card-info">Species:&nbsp;</p>
          <p className="card-info">{species}</p>
        </div>
        <div className="row">
          <p className="card-info">Gender:&nbsp;</p>
          <p className="card-info">{gender}</p>
        </div>
        <div className='row'>
                  <p className='card-info'>Origin:&nbsp;</p>
                  <p className='card-info'>{origin ? origin.name : 'Unknown'}</p>
              </div>
        <div className="row">
          <p className="card-info">Status:&nbsp;</p>
          <p className="card-info">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
