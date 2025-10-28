import { useState } from 'react';
import ImageCard from './ImageCard';

function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  // images 
  const imageNames = [
    'img1.jpg',
    
  ];

const images = imageNames.map(name => `/src/assets/${name}`);
return (

<div className="gallery">
{images.map((url, index) => (
<ImageCard source={url} />
))}
</div>
);
};
export default Galerie;

      
   

