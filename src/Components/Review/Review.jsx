import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DATA from '../Testmonials/Data';

const TestimonialsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
  };

  const responsiveSettings = [
    {
      breakpoint: 1024, // Large screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768, // Tablets
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];



  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <Slider {...settings} responsive={responsiveSettings}>
          {DATA.map((item, index) => (
            <div key={index}>
             
              <div className="flex flex-wrap justify-center bg-white rounded-md shadow-lg lg:mr-20 py-2 pt-4 lg:h-[600px]">
                <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                  <h5 className="mb-2 text-lg font-bold">{item.name}</h5>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    {item.review}
                  </p>
                  <ul className="mb-0 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default TestimonialsCarousel;
