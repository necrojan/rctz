import React from "react";

const border = {
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '.25rem',
    textAlign: 'center',
    padding: '10px 0'
}

const Cuisines = ({ cuisines, children }) => {
  return (
    <div className="cuisines" style={{marginBottom: '25px'}}>
      <h2>{children}</h2>
      <p>List of cuisines in your place.</p>
      <div className="row">
        {cuisines.slice(0, 4).map(cuisine => (
          <div className="col-md-3" key={cuisine.cuisine.cuisine_id}>
            <div style={border}>
              <p style={{marginBottom: '0'}}>{cuisine.cuisine.cuisine_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
