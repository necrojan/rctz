import React from "react";

const Collection = ({ collections, children }) => {
  return (
    <div className="collection">
      <h2>{children}</h2>
      <p>List of restaurants, pub, cafe, based on trends.</p>
      <div className="row">
        {collections.slice(0, 8).map(collection => (
          <div className="col-md-3" key={collection.collection.collection_id}>
            <div className="card">
              <div style={{
                background: 'url(' + collection.collection.image_url + ') no-repeat',
                width: '100%',
                minHeight: '153px',
                backgroundSize: 'cover'
              }}></div>
              <div className="card-header">{collection.collection.title}</div>
              <div className="card-body">
                <p className="card-text">{collection.collection.description.slice(0, 25)}...</p>
                <a href={collection.collection.url} className="btn btn-primary">See collection</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
