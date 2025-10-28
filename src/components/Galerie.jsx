import { useState } from 'react';

function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  // images 
  const imageNames = ['img1.jpg'];

const images = imageNames.map(name => `/src/assets/${name}`);
return (

<div className="gallery">
{images.map((image) => (
<img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
))}
</div>
);
};
export default Galerie;

      
   

