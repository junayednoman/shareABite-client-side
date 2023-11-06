import { Button } from "flowbite-react";
import bannerImg from '../../../../assets/banner img.png'

const Banner = () => {
    return (
        <div className="wrapper rounded-lg bg-[#9dc02055]">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-3">
                <div className="md:py-10 p-4 md:px-8 lg:p-12">
                    <h1 className="font-bold text-[32px] md:text-[55px] leading-10 md:leading-[68px] font-fontOswald">Share the Abundance, Feed the Hungry</h1>
                    <p className="md:mt-5 mt-3 mb-5 md:mb-7 ">Join Us in Connecting Communities to Fight Hunger, Reduce Food Waste, and Nourish Lives Through Sustainable and Compassionate Action</p>
                    <Button className="bg-[#9CC020] mt-5 py-1 md:py-[6px] px-2 md:px-4">Get Started</Button>
                </div>
                <div>
                    <img className="w-full" src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;