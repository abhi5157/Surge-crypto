import React from 'react';
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Explore.css";


const Card = (props) => {
  // [image,Name,price,perc] = props;
  return (
    <>
    
    <div className="card">
              <div className="top">
                <img src= {props.img} alt="" />
              </div>
              <div>
                <p>{props.id}</p>
                <h3>{props.name}</h3>

                <p>₹ {props.price}</p>
              </div>
              {/* <span><FiArrowUpRight /></span> */}
              {props.perc < 0 ? (
                <span className="red">
                  <FiArrowDown />
                  {props.perc} %
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight />
                  {props.perc} %
                </span>
              )}
            </div>

    </>


  )
}

export default Card