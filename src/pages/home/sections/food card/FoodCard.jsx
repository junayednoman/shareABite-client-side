import { Avatar, Card, Tooltip } from 'flowbite-react';
import { CiLocationOn } from 'react-icons/ci';
import { FcExpired } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const FoodCard = ({ food }) => {
    const { quantity, additional_notes, expire_date, food_image, pickup_location, donor_image, donor_name, food_name } = food;
    return (
        <div>
            <Card
                className="max-w-sm shadow-none hover:shadow-md duration-200 food_card mx-auto"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=996&t=st=1699245562~exp=1699246162~hmac=f3e9321a7dd7b1727963ccc0525f57fd2ea7a62c4e69a348e2ee62afe373d766"
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {food_name}
                    </h5>
                </a>
                <div className="flex gap-2 justify-between items-center">
                    <Avatar className="space-x-3 justify-start" img="https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1699245756~exp=1699246356~hmac=21ef141643ae2d93f966d2e25b68b398da76f2e52b1b31bf79b880e0bb8c7397" rounded>
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
                    </Avatar>
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
                <div className="my-1">
                    <p><span className="font-medium">Note: </span>{additional_notes}</p>
                </div>

                <div className="">

                    <Link
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

FoodCard.propTypes={
    food: PropTypes.object
}

export default FoodCard;