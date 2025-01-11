
import { Gallery } from "react-grid-gallery";
import React, { useContext } from 'react';
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
import banner from '../../assets/banner.jpg'
import { AuthContext } from "../../AuthProvider/AuthPrivider";
// import './gallary.css'

const GalleryPhoto = () => {
  
      const {isDarkMode} = useContext(AuthContext)
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
  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  // }, [isDarkMode]);
  return (
    <div className="">
       <div className="h-16"></div>
      <div style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        width: '100%',
        backgroundColor: '#575555',
        backgroundBlendMode: 'multiply'
      }} className='text-white flex flex-col justify-center items-center gap-2'>
        <p className='uppercase text-4xl'>Foods Photo Gallery</p>
        <p className='flex items-center gap-3 text-lg'>Home <div className='border-2 w-1 border-orange-500 h-4'></div>Gallery</p>
      </div>


      <div className={`flex justify-center items-center py-14 ${isDarkMode ? 'bg-[#050505ef]' : 'bg-white'}`}>

        <button type="button" className='bg-orange-500 py-2 px-5 rounded-lg text-white font-semibold text-[16px]' onClick={() => setOpen(true)}>
          Slide Show
        </button>
      </div>


      <div >

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
      </div>

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
      <div className={`${isDarkMode && 'bg-[#050505ef] text-white'} pb-16`}>

      <div className={`w-[85%] m-auto ` }>

        <Gallery images={images} />
      </div>
      </div>

    </div>
  );
};

export default GalleryPhoto;