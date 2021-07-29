import React from 'react';
import Photo from './Photo.jsx';

const PhotoGallery = ({photos}) => {
  return (
    <div>
      {
        photos.map(photo =>
          <Photo key={photo.id} photoUrl={photo.url}/>
        )
      }
    </div>
  )
}

export default PhotoGallery;