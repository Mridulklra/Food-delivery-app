import React from 'react'
import img from './bg.jpg'
export default function card() {
  return (
    <div>
       <div className="card mt-4" style={{"width": "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Aaj khane me kya hai </p>
    <div className='container w-100'>
        <select className='m-2 h-100 bg-success rounded'>
            {
                Array.from(Array(6),(e,i)=>{
                 return (
                          <option
                               key={i+1} value={i+1} >{i+1}
                          </option>
                 )
                }
            )
            }
        </select>
        <select className='m-2 h-100 bg-success rounded'>
          <option value = "Half">half</option>
          <option value = "Full">Full</option>
        </select>
        <div className='d-inline h-100 fs-s'>
            Total Price
        </div>

    </div>
  
  </div>
</div>
    </div>
  )
}
