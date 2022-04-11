import React,{useState} from 'react'
import './Sec3.css'
import img from "./img/crypto_imp.jpg"
import "./Sec3.css"



const Sec3 = () => {
    const [Info, setInfo] = useState("");

    const InputEvent = (e) =>{
        const data = e.target.value;
        setInfo(data);
    }
    const GetInfo = () =>{

        alert(`${Info}  Thanks for Contact Us `);
    }
    return (
        <div className='Sec3' id='contact'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={img} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Feel Free To Contact Us</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' value={Info} onChange={InputEvent} required />
                        <button className='btn' onClick={GetInfo} >Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sec3