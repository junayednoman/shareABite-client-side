import { Button } from 'flowbite-react';
import aboutImg from '../../../../assets/about.png'
const About = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8'>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <h3 className='font-semibold font-fontOswald text-[28px] md:text-[42px] mb-6 md:mb-8 section_title2 '>About us</h3>
                    <h5 className='font-semibold text-lg md:text-xl mb-4'>The Journey of Bridging Surplus Food to Those in Need</h5>
                    <p>At ShareABite, our mission is simple yet impactful: to bridge the gap between surplus food and those in need. We are passionate about reducing food waste and ensuring that no one goes to bed hungry. Through our user-friendly platform, we connect generous donors with recipients, fostering a community that cares. Join us in the fight against food waste and hunger, and help make a difference in the lives of many.</p>
                    <Button className=" lg:mt-8 md:mt-6 mt-4 bg-[#9CC020] ">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default About;