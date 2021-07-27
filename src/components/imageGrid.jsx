import React, { Component } from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className='img-div'>
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} className="img-div">
            <img className='template' src={doc.url} alt="" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
