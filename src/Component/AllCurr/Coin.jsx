import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const IconStyle = {
 
  display: "inline-flex",
  padding: "0.5rem",
  alignContent: "space-between"
}

const Coin = ({
  name,
  // curreentPost
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <div className="container">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h2 className="coinName">{name}</h2>
        <p className="coinSymbol"><span>Symbol :</span>  {symbol}</p>
      </div>
      <p className="coinPrice"><span>Price : </span> ₹ { price.toLocaleString()}</p>
      <p className="coinMarketcap"><span>Market Cap : </span>  ₹{ marketcap.toLocaleString()}</p>
      <p className="coinVolume"> <span>Volume (24H) :  </span> ₹{ volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className="priceContainerDOWN"  style={{color : "red"} }  >
            <FiArrowDown />
          <p className="priceChange" style={IconStyle} >{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="nothing"  >
        <div className="priceContainerUP" style={{color : "green"} } >
        <FiArrowUpRight />
          <p className="priceChange" style={IconStyle}>{priceChange.toFixed(2)}%</p>
        </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Coin;