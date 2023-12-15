import { Button, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../home/sections/food card/FoodCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth provider/AuthProvider";
import loadingImg from '../../assets/loading.gif'

const AvailableFood = () => {
    const { loading } = useContext(AuthContext);
    const loadedFoods = useLoaderData();
    const [foods, setFoods] = useState(loadedFoods);


    useEffect(() => {
        const AvailableFoods = loadedFoods.filter(loadedFood => loadedFood.food_status === "Available");
        console.log(AvailableFoods);
        setFoods(AvailableFoods)
    }, [loadedFoods])

    const handleSearch = e => {
        e.preventDefault();
        const searchTxt = e.target.searchTxt.value.toLocaleLowerCase();
        const filteredItem = loadedFoods.filter(loadedFood => loadedFood.food_name.toLocaleLowerCase().includes(searchTxt))
        setFoods(filteredItem)
    }

    // console.log(searchText);
    const handleSortByExpireDate = () => {
        const filteredItems = foods.sort((a, b) => {
            const dateA = new Date(a.expire_date)
            const dateB = new Date(b.expire_date)
            return dateA - dateB;
        })

        console.log(filteredItems);
        const newFoods = [...filteredItems];
        setFoods(newFoods)
        // console.log(newFoods);
    }

    if (loading) {
        return <div className='h-[50vh] flex justify-center items-center'>
            <img className="w-[110px]" src={loadingImg} alt="" />
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Available Foods | ShareABite - Waste Less, Feed</title>
            </Helmet>
      
            <div className="wrapper">
                <div className="md:py-10 py-7">
                    <div>
                        <form className="flex justify-center gap-2 items-center " onSubmit={handleSearch}>
                            <TextInput name="searchTxt" className="w-full md:w-1/3" id="base" placeholder="Search foods..." type="text" sizing="md" />
                            <input className='cursor-pointer text-white bg-[#9CC020] hover:bg-[#9dc020df] focus:ring-4 focus:ring-[#9dc020ca] font-medium rounded-lg text-sm px-5 py-[11px] dark:bg-blue-600 dark:hover:bg-blue-700' type="submit" value='Search' />
                        </form>
                    </div>
                    <div>
                        <Button onClick={handleSortByExpireDate} className="bg-[#9CC020] mx-auto mt-6 md:mt-8">Sort foods by expire date</Button>
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
                                    foods?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                                }

                            </div>

                        </div>
                    </div>
            }

        </div>
    );
};

export default AvailableFood;