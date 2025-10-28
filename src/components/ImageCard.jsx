import React from 'react'
import Coeur from "../assets/coeur.png"
import { useState } from 'react'


function ImageCard({source}) {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count + 1)
  }
  
  return (
     
    <div className='card'>               
         <img className='Hover' src={source} alt="" onClick={handleClick}/>   

         <div className='icone' onClick={handleClick}>
              <img src={Coeur} alt="like" />   
              <span className='count'>{count}</span>
         </div>
          
     </div>
     
  )
}

export default ImageCard