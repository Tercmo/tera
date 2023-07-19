import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCel, setCel } from '../slices/celSlices';

const CelebritiesList = ({ celebrities }) => {
  const dispatch = useDispatch();
  const { celebritiesList } = useSelector((state) => state.cel);

  function handleAdd(celid) {
    const celebrity = celebrities.find((c) => c.birthday === celid);
    if (celebritiesList.find((c) => c.birthday === celid)) {
      dispatch(removeCel(celid));
    } else {
      dispatch(setCel(celebrity));
    }
  }

  return (
    <div>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 g-2">
        {celebrities.map((c, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{c.name}</h4>
                <h2 className="card-subtitle mb-2 text-body-secondary">{c.age}</h2>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAdd(c.birthday)}
                >
                  Agregar a Celebridades Favoritas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebritiesList;
