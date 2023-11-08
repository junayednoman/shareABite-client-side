import { Label, Modal, TextInput } from 'flowbite-react';
import { useLoaderData } from "react-router-dom";
import { Card, Tooltip } from 'flowbite-react';
import { CiLocationOn } from 'react-icons/ci';
import { FcExpired } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../auth provider/AuthProvider';
import moment from 'moment/moment';
import useAxios from '../../../custom hooks/axios hook/useAxios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData();
    const axiosSecure = useAxios();
    const { quantity, expire_date, food_image, pickup_location, donor_name, food_name, additional_notes, donor_email, food_status, _id } = food;

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    const handleRequest = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.name.value;
        const foodImage = form.foodImage.value;
        const donorName = form.donorName.value;
        const donorEmail = form.donorEmail.value;
        const requesterEmail = form.requesterEmail.value;
        const requestDate = form.requestDate.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const note = form.note.value;
        const donationMoney = form.donationMoney.value;
        const foodData = { foodName, foodImage, donorName, donorEmail, requesterEmail, requestDate, pickupLocation, expireDate, note, donationMoney, food_status, food_id: _id, requesterImg: user.photoURL }
        // console.log(fields);

        axiosSecure.post('/food-request', foodData)
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        'Success',
                        'Your request has been submitted successfully',
                        'success'
                    )
                }
            })
    }


    return (
        <div className="wrapper spacer">
            <Helmet>
                <title>{food_name} | ShareABite - Waste Less, Feed</title>
            </Helmet>

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
                        onClick={() => setOpenModal(true)}
                        href="#"
                        className="w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 "
                    >
                        Request This Food
                    </Link>
                </div>
            </Card>

            {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- CODE FOR MODAL -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}

            <Modal show={openModal} size="3xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Submit a request for this food</h3>
                        <form onSubmit={handleRequest} className='grid grid-cols-2 gap-3 items-center'>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Name" />
                                </div>
                                <TextInput name='name' defaultValue={food_name} disabled required />
                            </div>
                            <div className=''>
                                <div className="mb-2 block">
                                    <Label value="Food Image" />
                                </div>
                                <TextInput name='foodImage' defaultValue={food_image} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Donor Name" />
                                </div>
                                <TextInput name='donorName' defaultValue={donor_name} disabled required />
                            </div>
                            {/* quantity, expire_date, food_image, pickup_location, donor_name, food_name, _id */}
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Donor Email" />
                                </div>
                                <TextInput name='donorEmail' defaultValue={donor_email} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Requester Email" />
                                </div>
                                <TextInput name='requesterEmail' defaultValue={user?.email} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Request Date" />
                                </div>
                                <TextInput name='requestDate' defaultValue={moment().format('LL')} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Pickup Location" />
                                </div>
                                <TextInput name='pickupLocation' defaultValue={pickup_location} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Expire Date" />
                                </div>
                                <TextInput name='expireDate' defaultValue={expire_date} disabled required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Additional Notes" />
                                </div>
                                <TextInput name='note' defaultValue={additional_notes} required />
                            </div>
                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Donation Money" />
                                </div>
                                <TextInput name='donationMoney' placeholder='$22' required />
                            </div>
                            <input className="col-span-2 cursor-pointer w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 mt-4" type="submit" value={'Submit Request'} />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FoodDetails;