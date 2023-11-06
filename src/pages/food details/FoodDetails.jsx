import { useLoaderData } from "react-router-dom";
import { Avatar, Card, Tooltip } from 'flowbite-react';
import { CiLocationOn } from 'react-icons/ci';
import { FcExpired } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData();
    const { quantity, additional_notes, expire_date, food_image, pickup_location, donor_name, food_name, _id } = food;

    return (
        <div className="wrapper spacer">
            <Card
                className="shadow-none block md:flex md:flex-row md:w-[80%] w-[95%] lg:w-2/3 hover:shadow-md duration-200 gap-0 p-0 md:p-3 food_card2 items-center mx-auto"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=996&t=st=1699245562~exp=1699246162~hmac=f3e9321a7dd7b1727963ccc0525f57fd2ea7a62c4e69a348e2ee62afe373d766"
            >
                <a href="#">
                    <h5 className="md:text-3xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {food_name}
                    </h5>
                </a>
                <div className="flex gap-2 justify-between items-center">
                        <div className="space-y-1 font-medium dark:text-white">
                            <Tooltip content='Donar' placement="right">
                                <div className="text-base font-semibold">{donor_name}</div>
                            </Tooltip>
                            <div className="flex gap-1 items-center">
                                <Tooltip placement="bottom" content='Pickup Location'>
                                    <CiLocationOn></CiLocationOn>
                                </Tooltip>
                                <Tooltip placement="bottom" content='Pickup Location'>
                                    <p className="text-sm">{pickup_location}</p>
                                </Tooltip>
                            </div>
                        </div>
                    <div className="justify-end">
                        <div className="flex gap-1 items-center">
                            <FcExpired></FcExpired>
                            <Tooltip content='Expire Date'>
                                <p className="text-sm font-medium">{expire_date}</p>
                            </Tooltip>

                        </div>
                        <div className="flex gap-1 items-center">
                            <FaUsers></FaUsers>
                            <Tooltip content='Quantity' placement="bottom">
                                <p className="text-sm font-medium">{quantity}</p>
                            </Tooltip>

                        </div>
                    </div>
                </div>

                <div className="">

                    <Link
                        to={`/food/${_id}`}
                        href="#"
                        className="w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 "
                    >
                        Request This Food
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default FoodDetails;