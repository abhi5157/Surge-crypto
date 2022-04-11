import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
// import "../Component/";
import "./Explore.css";
import Card from "./Card";
// import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

const Explore = () => {
  const url =
    " https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const [Data, setData] = useState(null);

  
  useEffect(() => {

    axios.get(url).then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(()=>{
  //   try
  //   {
  //     const crypto = axios.get(url);
  //     const response = (crypto) =>{
  //         setData(crypto.Data);
  // }
  //   }

  // catch((error) =>{
  //           console.log(error);
  //      }) ,[])

  console.log(Data);

  if (!Data) {
    return null;
  }


  

  return (
    <div>
      <div className="featured" id="home">
        <div className="container">
          {/* left  */}
          <div className="left">
            <h1>Top 7 Trending Crypto Currencies</h1>
            {/* <h2>Explore the crypto's Like Bitcoin, Etherium and Dogecoin </h2> */}
            <p>See all the available assets : Cryptocurrencies and NFT 's</p>
            <button className="btn">
          See More coins</button>
          </div>

          {/* right */}

          <div className="right">
         <Card img = {Data[0].image}
            name = {Data[0].name}
            price = {Data[0].current_price}
            perc = {Data[0].price_change_percentage_24h}  />


         <Card  img = {Data[1].image}
            name = {Data[1].name}
            price = {Data[1].current_price}
            perc = {Data[1].price_change_percentage_24h}/>


         <Card img = {Data[2].image}
            name = {Data[2].name}
            price = {Data[2].current_price}
            perc = {Data[2].price_change_percentage_24h} />


         <Card img = {Data[3].image}
            name = {Data[3].name}
            price = {Data[3].current_price}
            perc = {Data[3].price_change_percentage_24h} />


         <Card img = {Data[4].image}
            name = {Data[4].name}
            price = {Data[4].current_price}
            perc = {Data[4].price_change_percentage_24h} />


         <Card img = {Data[5].image}
            name = {Data[5].name}
            price = {Data[5].current_price}
            perc = {Data[5].price_change_percentage_24h} />


         <Card img = {Data[6].image}
            name = {Data[6].name}
            price = {Data[6].current_price}
            perc = {Data[6].price_change_percentage_24h} />

          <Card img = {Data[7].image}
            name = {Data[7].name}
            price = {Data[7].current_price}
            perc = {Data[7].price_change_percentage_24h} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
