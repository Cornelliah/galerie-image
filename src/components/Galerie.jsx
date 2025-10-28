import { useState } from 'react';
import ImageCard from './ImageCard';

function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  // images 
  const imageNames = [
    'img1.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    
    
  ];

const images = imageNames.map(name => `/src/assets/${name}`);
return (
  

<div className="gallery">
 <h1>Galerie d'image</h1>

<div >{images.map((url, index) => (
<ImageCard key={index} source={url} />
))}</div>
</div>
);
};
export default Galerie;

      
   

