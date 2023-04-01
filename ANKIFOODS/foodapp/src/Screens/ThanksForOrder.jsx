import React from 'react'
import { Link } from 'react-router-dom'
import img from "../Images/200w.gif"

export default function ThanksForOrder() {
  return (
    <div>
        <div style={{textAlign:"center", marginTop:"60px"}}>
            <h1>Thanks For Your Order</h1>
            <img src={img} alt="ThanksForOrder" />
            <br />
            <br />
            <br />
            <Link to={"/myorder"}>
                <button className={`btn btn-success justify-center ms-2 `}>Orders History</button>
            </Link>
           
        </div>

    </div>
  )
}
