import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import React, { useEffect, useState } from 'react';

const Gallery = ({ src, alt }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const list = [];
    if (src) {
      src.map(function (item) {
        const image = {
          original: item,
          thumbnail: item,
          originalAlt: alt,
          thumbnailAlt: alt,
        };
        list.push(image);
        return src;
      });
    }
    setImages(list);
    return;
  }, [alt, src]);

  return (
    <ImageGallery
      items={images}
      sizes="20px"
      showPlayButton={false}
      showIndex={true}
      lazyLoad={true}
    />
  );
};

export default Gallery;
