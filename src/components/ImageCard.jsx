import React from 'react'
import Coeur from "../assets/11.png"
import { useState } from 'react'


function ImageCard({source}) {
  const [count, setCount] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  
  const handleLike = (e) => {
    e.stopPropagation()
    setCount(count + 1)
  }
  
  const handleImageClick = () => {
    setIsZoomed(true)
  }
  
  const closeZoom = () => {
    setIsZoomed(false)
  }
  
  return (
     <>
     
    <div className='card'>               
         <img className='Hover' src={source} alt="" onClick={handleImageClick}/>   

         <div className='icone' onClick={handleLike}>
              <img src={Coeur} alt="like" />   
              <span className='count'>{count}</span>
         </div>
          
     </div>
     
     {isZoomed && (
       <div className='modal' onClick={closeZoom}>
         <div className='modal-content'>
           <span className='close'>&times;</span>
           <img src={source} alt="" className='zoomed-image'/>
         </div>
       </div>
     )}
     </>
  )
}

export default ImageCard