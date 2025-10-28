import React from 'react'
import Coeur from "../assets/coeur.png"

function ImageCard({source}) {
  return (
     
    <div className='card'>               
         <img className='Hover' src={source} alt=""/>   

         <div className='icone'>
              <img src={Coeur} alt="like" />   
         </div>
          
     </div>
     
  )
}

export default ImageCard