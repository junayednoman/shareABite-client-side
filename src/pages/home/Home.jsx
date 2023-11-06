import { Helmet } from "react-helmet-async";
import Banner from "./sections/banner/Banner";
import { useEffect, useState } from "react";
import useAxios from "../../custom hooks/axios hook/useAxios";
import FoodCard from "./sections/food card/FoodCard";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Cta from "./sections/cta/Cta";
import About from "./sections/about/About";


const Home = () => {
    const [foods, setFoods] = useState([])
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get('foods')
            .then(res => {
                // console.log(res.data);
                setFoods(res.data)
            })
    }, [])
    // console.log(foods);

    const sortedFoods = foods.sort((a, b) => b.quantity - a.quantity);
    const featuredFoods = sortedFoods.slice(0, 6);
    console.log(featuredFoods);



    return (
        <div className="mt-16 wrapper">
            <Helmet>
                <title>Home | ShareABite - Waste Less, Feed</title>
            </Helmet>

            <Banner></Banner>

            {/* featured food */}
            <div className="wrapper spacer pb-0">
                <div className="text-center mb-10">
                    <h3 className="font-semibold font-fontOswald text-[28px] md:text-[42px] section_title mb-5">Featured Foods</h3>
                    <p>Discover Exceptional Donations to Satisfy Your Hunger</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:gap-8 gap-3">
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

            <div className="pb-14 md:pb-28">
                <About></About>
            </div>

            <div className="mb-10 md:mb-20">
                <Cta></Cta>
            </div>

        </div>
    );
};

export default Home;