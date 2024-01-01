import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import testiImg from '../../../../assets/testi-man.jpg'
import quoteImg from '../../../../assets/quote.png'
import 'swiper/css/pagination';


const Testimonial = () => {
    return (
        <div className=''>
            <Swiper 
            className='wrapper mySwiper'
            navigation={true} 
            modules={[Navigation]}
            >
                <SwiperSlide className='text-center px-0 md:px-10 lg:px-[180px]'>
                    <img className='mx-auto w-14 md:w-[80px] rounded-full' src={testiImg} alt="" />
                    <p className='italic my-4 md:my-8 text-sm md:text-lg'>I am amazed by the impact ShareABite has on our community. It is not just about food; it is about compassion and support. I have been both a donor and a recipient, and the sense of togetherness is truly heartwarming.</p>
                    <h5 className='font-semibold text-base md:text-lg'>Tarik Hasan</h5>
                    <img className='mx-auto w-10 md:w-[60px] mt-3' src={quoteImg} alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center px-0 md:px-10 lg:px-[180px]'>
                    <img className='mx-auto w-14 md:w-[80px] rounded-full' src={testiImg} alt="" />
                    <p className='italic my-4 md:my-8 text-sm md:text-lg'>Being part of ShareABite has been a fulfilling experience. Knowing that my surplus food can help someone in need gives me a sense of purpose. This platform is a game-changer!</p>
                    <h5 className='font-semibold text-base md:text-lg'>Sabbir Ahmed</h5>
                    <img className='mx-auto w-10 md:w-[60px] mt-3' src={quoteImg} alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center px-0 md:px-10 lg:px-[180px]'>
                    <img className='mx-auto w-14 md:w-[80px] rounded-full' src={testiImg} alt="" />
                    <p className='italic my-4 md:my-8 text-sm md:text-lg'>As a volunteer with ShareABite, I have seen firsthand how a small effort can lead to a big change. The smiles on the faces of those we have helped are priceless. It is inspiring to be a part of this movement.</p>
                    <h5 className='font-semibold text-base md:text-lg'>Jawad Rahman</h5>
                    <img className='mx-auto w-10 md:w-[60px] mt-3' src={quoteImg} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Testimonial;