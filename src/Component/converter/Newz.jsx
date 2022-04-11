import React, { useEffect, useState } from 'react'
import "../index.css"
const News = () => {
const [Article, setArticle] = useState()
  useEffect(()=>{
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news-live3.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
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
    <div className='newz-feed'>
<h1>Newz - Feed</h1>
{firstTenArticles?.map((Article, _index) => (
                <div key={_index}>
                    <a href={Article.url}><p>{Article.title}</p></a>
                </div>))}
    </div>
  )
}

export default News