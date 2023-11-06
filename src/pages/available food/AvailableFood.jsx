import { Button, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../home/sections/food card/FoodCard";
import { useState } from "react";

const AvailableFood = () => {
    const loadedFoods = useLoaderData();
    const [foods, setFoods] = useState(loadedFoods);
    const [searchLoading, setSearchLoading] = useState(false)


    const handleSearch = e => {
        setSearchLoading(true);
        e.preventDefault();
        const searchTxt = e.target.searchTxt.value.toLocaleLowerCase();
        const filteredItem = loadedFoods.filter(loadedFood => loadedFood.food_name.toLocaleLowerCase().includes(searchTxt))
        setFoods(filteredItem)
        setSearchLoading(false);
    }

    // console.log(searchText);

    if (searchLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Helmet>
                <title>Available Foods | ShareABite - Waste Less, Feed</title>
            </Helmet>
            <div className="wrapper">
                <div className="spacer">
                    <div>
                        <form className="flex justify-center gap-2 items-center " onSubmit={handleSearch}>
                            <TextInput name="searchTxt" className="w-full md:w-1/3" id="base" placeholder="Search foods..." type="text" sizing="md" />
                            <input className='cursor-pointer text-white bg-[#9CC020] hover:bg-[#9dc020df] focus:ring-4 focus:ring-[#9dc020ca] font-medium rounded-lg text-sm px-5 py-[11px] dark:bg-blue-600 dark:hover:bg-blue-700' type="submit" value='Search' />
                        </form>
                    </div>
                    <div>
                        <Button className="bg-[#9CC020] mx-auto mt-4 md:mt-8">Sort foods by expire date</Button>
                    </div>
                </div>
            </div>
            {
                !foods.length > 0 ? <>
                    <img className="mx-auto w-[150px]" src="https://media.tenor.com/QEcK2GmBJH4AAAAi/frog-frog-dog-log.gif" alt="" />
                    <h4 className="font-semibold mt-5 mb-14 text-center text-xl md:text-4xl">No result found!</h4>
                </>
                    : <div className="wrapper">
                        <div className="text-center mb-12 md:mb-20">
                            <h3 className="font-semibold text-center font-fontOswald text-[28px] md:text-[42px] section_title">Available foods</h3>
                        </div>
                        <div className="col-span-5">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 md:mb-24 mb-12">
                                {
                                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                                }

                            </div>

                        </div>
                    </div>
            }

        </div>
    );
};

export default AvailableFood;