import React, { useEffect, useState } from 'react'
import "./Newz.css"
import CryptoNewz from "./img/cryptocurrency-news.jpg" 

const News = () => {
const [Article, setArticle] = useState()
  useEffect(()=>{
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
    'X-RapidAPI-Key': '23aa8c496dmshdf15449bb6b4869p137a4ajsn88400554f966'
  }
};

axios.request(options).then( (response)=> {

  setArticle(response.data);
}).catch( (error)=> {
	console.error(error);
});


  }  ,[])
  console.log(Article);
  // const FirstTenArticle = Article?.slice(0,10);
  const firstTenArticles = Article?.slice(0,7)
  return (
    <div className='newz-feed' id='news'>
<h1 className='newzHeading'> Newz <span className="primary">Feed</span>  </h1>
<div className="main">
<div className="sub-container-1">
<ol>
{firstTenArticles?.map((Article, index) => (
            
                <li>
                    <div key={index} >
                    <a href={Article.url}  className = "newz"><p>{Article.title}</p></a> 
                    </div>
                </li>
              
               
                ))}
                </ol>
              
    </div>
    <div className="sub-container-2">
<img src= {CryptoNewz} alt="" className='img '/>

    </div>

    </div>
    
    </div>
  )
}

export default News