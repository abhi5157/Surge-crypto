import React from 'react'


function Exchange(props) {
  return (
   <>
   <div className="Exchange-curr">
<h3> Exchange Rates</h3>
<h2> $ {props.ExchangeRate} </h2>   
<p className='conversionName'  style={{color : "primary"}}>{props.PrimaryCurrency} to {props.SecondaryCurrency} </p>    
   </div>
   </>
  )
}

export default Exchange