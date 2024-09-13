import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  { id: 1, src: "/pc.png", alt: "Photo 1", href: "/pc" },
  { id: 2, src: "/pq.png", alt: "Photo 2", href: "/pq" },
  { id: 3, src: "/pdl1.png", alt: "Photo 3", href: "/pdl" },
  { id: 4, src: "/po3.png", alt: "Photo 4", href: "/po" },
  { id: 5, src: "/pg9.png", alt: "Photo 5", href: "/pg" },
  { id: 6, src: "/pz.png", alt: "Photo 6", href: "/pz" },
];

const PhotoCarousel = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
  };

  if (!isMobile) {
    return null;
  }

  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <div className="mobile-carousel px-4 py-2 mt-10">
      <h2 className="text-3xl text-center mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
        ¿Cuál se te antojó?
      </h2>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="p-1" onClick={() => handleClick(photo.href)}>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden cursor-pointer">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;
