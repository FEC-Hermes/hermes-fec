import React from 'react';
import Photo from './Photo.jsx';

const PhotoGallery = ({ photos, setReviewImgUrl}) => {
  return (
    <div>
      {
        photos.map(photo =>
          <Photo key={photo.id} photoUrl={photo.url} setReviewImgUrl={setReviewImgUrl}/>
        )
      }
    </div>
  );
};

export default PhotoGallery;