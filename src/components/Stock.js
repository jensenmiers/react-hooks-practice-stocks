import React,{useState} from "react";

function Stock({stock,handleClickFunction}) {

const {name,price,ticker} = stock



  return (
    <div>
      <div onClick={() => handleClickFunction(stock)} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
