import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onPortfolioClick}) {
  const portfolio = stocks.map(stock => <Stock 
    key={stock.id} 
    stock={stock} 
    handleClickFunction={onPortfolioClick}
    /> )
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
      }
      {portfolio}
    </div>
  );
}

export default PortfolioContainer;
