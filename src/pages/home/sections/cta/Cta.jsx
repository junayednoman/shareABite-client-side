import { Button } from "flowbite-react";

const Cta = () => {
    return (
        <div className="wrapper">
            <div className="rounded-md py-5 md:py-14 text-center px-5 md:px-[30px] text-white" style={{backgroundImage: 'url(https://i.postimg.cc/W1g87z8j/Untitled-design-2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h3 className="font-semibold font-fontOswald text-[28px] md:text-[45px] mb-5">Are you ready to make a meaningful difference?</h3>
            <p className="md:px-5 px-0 md:text-base text-sm lg:px-[120px]">Are you ready to make a meaningful difference in the fight against food waste and hunger? Join the food sharing movement and become a vital part of our mission. At our core, we believe that no one should go to bed hungry, and that excess food can be a powerful force for good.</p>
            <Button className="bg-[#9CC020] mx-auto mt-5 py-1 md:py-[6px] px-2 md:px-4">Join Now</Button>
        </div>
        </div>
    );
};

export default Cta;