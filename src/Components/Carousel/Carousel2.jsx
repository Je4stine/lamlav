import Slider from 'react-slick';


const Carousel2 =({ Image1})=>{
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return (
        <Slider {...settings}>
            <div>
                <img src={Image1} alt="Image 1" />
            </div>
        </Slider>
    )
};

export default Carousel2;