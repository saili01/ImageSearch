import React from 'react';
import ImageCard from './imageCard';
import '../components/imageList.css';

const imageList=props=>{
   const carImages= props.picture.map((image)=>{
return <ImageCard key={image.id} image={image}/>
    })
return (
    <div className="image-list">{carImages}</div>
);
}

export default imageList;