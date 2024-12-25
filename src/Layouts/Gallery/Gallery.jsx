
import { Gallery } from "react-grid-gallery";
import React, { useEffect, useState } from 'react';
// import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import * as React from "react";

// import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useLoaderData } from 'react-router-dom';

const GalleryPhoto = () => {
  const images = [
    {
       src: "https://i.ibb.co.com/27Xgh97/5.jpg",
       width: 320,
       height: 174,
      //  isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/tmmdsg3/images.jpg",
       width: 400,
       height: 300,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/n1ZQZyb/2.jpg",
       width: 400,
       height: 100,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/DMBYWsq/1.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/6NDVnK0/3.jpg",
       width: 320,
       height: 212,
    },
    {
       src: "https://i.ibb.co.com/27Xgh97/5.jpg",
       width: 320,
       height: 174,
      //  isSelected: true,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/tmmdsg3/images.jpg",
       width: 400,
       height: 300,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/n1ZQZyb/2.jpg",
       width: 400,
       height: 100,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/DMBYWsq/1.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
       src: "https://i.ibb.co.com/6NDVnK0/3.jpg",
       width: 320,
       height: 212,
    },
 ];
  
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <button type="button" className='btn' onClick={() => setOpen(true)}>
        Slide Show
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        slides={[
          {
            src: `https://i.ibb.co.com/ph6bt9T/Spaghetti-Carbonara.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/ph6bt9T/Spaghetti-Carbonara.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/drXCpsr/Beef-Burger-with-Fries.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/DMBYWsq/1.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/DMBYWsq/1.jpg", foodName: "Food 1", width: 10, height: 10 },
            ],
          },
          {
            src: `https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg", foodName: "Food 1", width: 10, height: 10 },
              
            ],
          },
          {
            src: `https://i.ibb.co.com/n1ZQZyb/2.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/n1ZQZyb/2.jpg", foodName: "Food 1", width: 10, height: 10 },
              
            ],
          },
          {
            src: `https://i.ibb.co.com/6NDVnK0/3.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/6NDVnK0/3.jpg", foodName: "Food 1", width: 10, height: 10 },
              
            ],
          },
          {
            src: `https://i.ibb.co.com/tmmdsg3/images.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/tmmdsg3/images.jpg", foodName: "Food 1", width: 10, height: 10 },
              
            ],
          },
          {
            src: `https://i.ibb.co.com/27Xgh97/5.jpg`, foodName: "Food 1",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              
              { src: "https://i.ibb.co.com/27Xgh97/5.jpg", foodName: "Food 1", width: 10, height: 10 },
              
            ],
          },
         
        ]}
      />

      {/* gellary images */}

      {/* <div className='grid grid-cols-4 w-[80%] m-auto'>
        <img src="https://i.ibb.co.com/27Xgh97/5.jpg" alt="" />
        <img src="https://i.ibb.co.com/RcHmRmg/Grilled-Chicken-Caesar-Salad.jpg" alt="" />
        <img src="https://i.ibb.co.com/6NDVnK0/3.jpg" alt="" />
        <img src="https://i.ibb.co.com/n1ZQZyb/2.jpg" alt="" />
      </div>
      <div className='grid grid-cols-4 w-[80%] m-auto'>
        <img src="https://i.ibb.co.com/27Xgh97/5.jpg" alt="" />
        <img src="https://i.ibb.co.com/DMBYWsq/1.jpg" alt="" />
        <img src="https://i.ibb.co.com/6NDVnK0/3.jpg" alt="" />
        <img src="https://i.ibb.co.com/n1ZQZyb/2.jpg" alt="" />
      </div> */}
      <div className="w-[85%] m-auto">

      <Gallery images={images} />
      </div>
      
    </div>
  );
};

export default GalleryPhoto;