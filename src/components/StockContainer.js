import React, {useState} from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick}) {

  const stockArr = stocks.map(stock => <Stock key={stock.id} stock={stock} handleClickFunction={onStockClick}/> )


  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {stockArr}
    </div>
  );
}

export default StockContainer;
