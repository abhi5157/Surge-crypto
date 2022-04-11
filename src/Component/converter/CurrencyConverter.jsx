import axios from 'axios'
import React,{useState} from 'react'
import "./Converter.css"
// import "../index.css"

import Exchange from "./Exchange"

const CurrencyConverter = () => {
    const [PrimaryCurrency, setPrimaryCurrency] = useState("BTC");
    const [SecondaryCurrency, setSecondaryCurrency] = useState("BTC");
    const [amount, setAmount] = useState(1);
  const [ExchangeRate, setExchangeRate] = useState(1);
  const [Result, setResult] = useState(0);

  
    console.log({PrimaryCurrency});
    console.log({SecondaryCurrency});
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const Converter =()=>{
       

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: PrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: SecondaryCurrency},
  headers: {
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
    'X-RapidAPI-Key': '23aa8c496dmshdf15449bb6b4869p137a4ajsn88400554f966'
  }
};

axios.request(options).then(  (response)=> {
	console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);

}).catch( (error)=> {
	console.error(error);
});
//  console.log(ExchangeRate);
//  console.log(Result);
 

    }
  return (
      <>
      <div className="wrap" id = "converter">
    <div className='Converter-heading'>
      <h2> <span>Crypto</span>  Converter</h2>
      <p>For eg conversion of BTC to USD</p>
      <button className='converter-btn  btn' onClick={Converter}>Convert</button>
      </div>

  <div className="Converter">
     <div className="input-container">
     <table>
          <tbody>
              <tr>
                  <td>Primary Currency</td>
                  <td> 
                  <input type="number" value={amount} name = "Currency value"  className='input-box ' onChange= {e => {setAmount(e.target.value)}}/>
                  </td>
                   
                  <td> <select name="currency-option" value={PrimaryCurrency} className = "currency-option"
                   onChange={(e)=>{   setPrimaryCurrency(e.target.value)   }} >
                  {currencies.map((data,index)=> <option key= {index}> {data} </option>  ) } 
                   
                      </select> </td>
               </tr>  

               <tr>
                  <td>Secondary Currency</td>
                  <td><input type="number" value={Result} disabled = {true} name = "Currency value" className='input-box ' /> </td>
                   
                  <td> <select name="currency-option-2" value={SecondaryCurrency} className = "currency-option-2" 
                  onChange={(e)=>{   setSecondaryCurrency(e.target.value) }}>
                  {currencies.map((data,index)=> <option key= {index}> {data} </option>  ) } 
                   
                      </select> </td>
               </tr>     
          </tbody>
      </table>
      
     </div>
      <Exchange ExchangeRate = {ExchangeRate}
      PrimaryCurrency = {PrimaryCurrency}
      SecondaryCurrency = {SecondaryCurrency} />
    </div>

</div>
    
    </>
  )
}

export default CurrencyConverter
