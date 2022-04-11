
import { useEffect, useState } from "react";

import axios from "axios";
import "./Search.css";


import Coin from "./Coin"
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const [Pagination, setPagination] = useState({
    start : 0,
    end : 9
  })
 


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  



const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div>
      <div className="header" id = "explore">
   
   <div className="heading">
     <h1>Explore any <span className="primary">Crypto </span> </h1>
   </div>
   <div className="SearchBox">
        <form>
          <input 
            
            // className = "btn"
            className="inputField "
            type="text"
            onChange={handleChange}
            placeholder="Search a Coin"
          />
        </form>
        </div>
        
       
      
      </div>
      <div className="coinsContainer">
      {filterCoin.slice(Pagination.start,Pagination.end).map((coin) => {
          return (
            <Coin
              key={coin.id}
              // currentPost = {currentPost}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default App;