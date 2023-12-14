// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="flex flex-wrap bg-[#F5EDE0]">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Every Paw Deserves a <span className="text-green-700">Loving</span> Home</h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10">
Every pet, regardless of size or breed, deserves a loving home where they can thrive emotionally and physically, surrounded by compassionate caregivers committed to providing them with the care, attention, and affection they need.</p>

          </div>
        </header>
      </div>
    </div>
    <img src="https://i.ibb.co/gWdHqrd/b1.jpg" alt="Leafs" className="  object-cover  sm:w-4/12"/>
  </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-wrap bg-[#F5EDE0]">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Every Paw Deserves a <span className="text-green-700">Loving</span> Home</h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10">
Every pet, regardless of size or breed, deserves a loving home where they can thrive emotionally and physically, surrounded by compassionate caregivers committed to providing them with the care, attention, and affection they need.</p>
          </div>
        </header>
      </div>
    </div>
    <img src="https://i.ibb.co/rc2bT7B/b2.jpg" alt="Leafs" className="  object-cover  sm:w-4/12"/>
  </div></SwiperSlide>
        <SwiperSlide><div className="flex flex-wrap bg-[#F5EDE0]">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Every Paw Deserves a <span className="text-green-700">Loving</span> Home</h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10">
Every pet, regardless of size or breed, deserves a loving home where they can thrive emotionally and physically, surrounded by compassionate caregivers committed to providing them with the care, attention, and affection they need.</p>
          </div>
        </header>
      </div>
    </div>
    <img src="https://i.ibb.co/BCzYfNS/b3.jpg" alt="Leafs" className="  object-cover  sm:w-4/12"/>
  </div></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;