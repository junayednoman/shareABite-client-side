import { Avatar, Card, Tooltip } from 'flowbite-react';
import { CiLocationOn } from 'react-icons/ci';
import { FcExpired } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const FoodCard = ({ food }) => {
    const { quantity, additional_notes, expire_date, food_image, pickup_location, donor_image, donor_name, food_name, _id } = food;
    return (
        <div>
            <Card
                className="max-w-sm shadow-none hover:shadow-md duration-200 food_card mx-auto"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={food_image}
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {food_name}
                    </h5>
                </a>
                <div className="flex md:flex-row flex-row gap-0 md:gap-2 justify-between items-center">
                    <Avatar className="space-x-1 md:space-x-2 justify-start" img={donor_image} rounded>
                        <div className="space-y-1 font-medium dark:text-white">
                            <Tooltip content='Donar' placement="right">
                                <div className="text-sm font-semibold">{donor_name}</div>
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
                    </Avatar>
                    <div className="justify-end">
                        <div className="flex gap-1 items-center">
                            <FcExpired></FcExpired>
                            <Tooltip content='Expire Date'>
                                <p className="text-[13px] font-medium">{expire_date}</p>
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
                <div className="my-1">
                    <p><span className="font-medium">Note: </span>{additional_notes}</p>
                </div>

                <div className="">

                    <Link
                        to={`/food/${_id}`}
                        href="#"
                        className="w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 "
                    >
                        View Details
                    </Link>
                </div>
            </Card>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.object
}

export default FoodCard;