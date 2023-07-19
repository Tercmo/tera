import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import '../css/general.css';
import 'bootstrap/dist/css/bootstrap.css';

export const Favorites = () => {
  const { celebritiesList } = useSelector((state) => state.cel);

  return (
    <Fragment>
      <div>Listado de Favoritos</div>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 g-2">
        {celebritiesList.map((c) => (
          <div className="col" key={c.birthday}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{c.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{c.nationality}</h6>
                <p className="card-text">Edad: {c.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
