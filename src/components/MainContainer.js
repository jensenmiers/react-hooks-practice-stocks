import React,{useEffect,useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const baseUrl = 'http://localhost:3001/stocks'

  const [portArr, setPortArr] = useState([])

  function addToPortfolio(newStock) {
    setPortArr([...portArr, newStock])
  }

  function removeFromPortfolio(stock) {
    const updatedPortfolio = portArr.filter(portfolio => portfolio.id !== stock.id)
    setPortArr(updatedPortfolio)
  }

  const [stocks, setStocks] = useState([])


  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(setStocks)
  },[])

  return (
    <div>p
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portArr} onPortfolioClick={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
