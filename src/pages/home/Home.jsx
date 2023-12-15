import { Helmet } from "react-helmet-async";
import Banner from "./sections/banner/Banner";
import { useEffect, useState } from "react";
import useAxios from "../../custom hooks/axios hook/useAxios";
import FoodCard from "./sections/food card/FoodCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Cta from "./sections/cta/Cta";
import About from "./sections/about/About";
import Testimonial from "./sections/testimonial/Testimonial";
import GoogleMap from "../../components/google map/GoogleMap";


const Home = () => {
    const [foods, setFoods] = useState([])
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get('foods')
            .then(res => {
                // console.log(res.data);
                const filteredItems = res.data.filter(item => item.food_status === "Available")
                setFoods(filteredItems)
            })
    }, [])
    // console.log(foods);

    const sortedFoods = foods.sort((a, b) => b.quantity - a.quantity);
    const featuredFoods = sortedFoods.slice(0, 6);



    return (
        <div className="">
            <Helmet>
                <title>Home | ShareABite - Waste Less, Feed</title>
            </Helmet>

            <div className="mt-2 md:my-12 md:mb-0 mb-10">
                <Banner></Banner>
            </div>

            <div className="md:mt-28 mt-0 wrapper">
                <About></About>
            </div>

            {/* featured food */}
            <div className="lg:mx-10">

                <div className="wrapper spacer pb-0">
                    <div className="text-center mb-10">
                        <h3 className="font-semibold font-fontOswald text-[28px] md:text-[42px] section_title mb-5">Featured Foods</h3>
                        <p>Discover Exceptional Donations to Satisfy Your Hunger</p>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-center mx-3 lg:mx-0 md:mx-10 lg:grid-cols-3 md:gap-8 gap-3">
                        {
                            featuredFoods.map(food => <FoodCard
                                key={food._id}
                                food={food}
                            ></FoodCard>)
                        }
                    </div>
                    <Link to={'/available-food'}>
                        <Button className=" lg:mt-14 md:mt-10 mt-7 mx-auto bg-[#9CC020] ">Show All</Button>
                    </Link>
                </div>
            </div>



            <div className="bg-[#9dc02055] py-10 md:py-20 px-5 md:px-14 mb-14 md:mt-0 mt-12 md:mb-28">
                <Testimonial></Testimonial>
            </div>

            <div className="mb-10 md:mb-20">
                <Cta></Cta>
            </div>

        <div className="md:mb-10">
        <GoogleMap></GoogleMap>
        </div>


        </div>
    );
};

export default Home;