import { useState } from 'react';
import styles from './PortFolioStyles.module.css';
import PortfolioCard from '../../components/PortfolioCard';
import zoomIcon from "../../assets/loupe1.png";

function Galerie() {
  const [selectedImage, setSelectedImage] = useState(null);

  // images 
  const imageNames = [ ];

const images = imageNames.map(name => `/assets/${name}`);
return (

<div className="gallery">
{images.map((image) => (
<img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
))}
</div>
);
};
export default Galerie;

      
   

