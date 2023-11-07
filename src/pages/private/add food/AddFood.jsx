import { Helmet } from "react-helmet-async";
import { Datepicker, Label, TextInput } from 'flowbite-react';
import { useContext } from "react";
import { AuthContext } from "../../../auth provider/AuthProvider";
import useAxios from "../../../custom hooks/axios hook/useAxios";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();

    const handleAddFood = e => {
        // quantity, expire_date, food_image, pickup_location, donor_name, food_name, additional_notes, donor_email
        e.preventDefault();
        const form = e.target;
        const food_name = form.name.value;
        const food_image = form.foodImage.value;
        const donor_name = form.donorName.value;
        const donor_email = form.donorEmail.value;
        const donor_image = form.donorImage.value;
        const pickup_location = form.pickupLocation.value;
        const expire_date = form.date.value;
        const food_status = form.status.value;
        const quantity = form.quantity.value;
        const additional_notes = form.note.value;
        const foodData = { food_name, quantity, food_status, food_image, donor_name, donor_email, donor_image, pickup_location, expire_date, additional_notes, }
        // console.log(foodData);

        axiosSecure.post('/foods', foodData)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Success',
                        'Food added successfully',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="md:pt-10 pt-6 md:pb-20 pb-12 ">
            <div className="wrapper">
                <Helmet>
                    <title>Add Food | ShareABite - Waste Less, Feed</title>
                </Helmet>

                <h3 className='text-center font-fontOswald font-semibold text-xl md:text-4xl mb-1 md:mb-9'>
                    Add Food
                </h3>
                <form onSubmit={handleAddFood} className='grid grid-cols-2 gap-3 items-center'>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Food Name" />
                        </div>
                        <TextInput name='name' required />
                    </div>
                    <div className=''>
                        <div className="mb-2 block">
                            <Label value="Food Image" />
                        </div>
                        <TextInput name='foodImage' required />
                    </div>
                    <div className='mt-3'>
                        <div className="mb-2 block">
                            <Label value="Food Quantity" />
                        </div>
                        <TextInput name='quantity' required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Donor Name" />
                        </div>
                        <TextInput name='donorName' defaultValue={user?.displayName} disabled required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Donor Image" />
                        </div>
                        <TextInput name='donorImage' defaultValue={user?.photoURL} disabled required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Donor Email" />
                        </div>
                        <TextInput name='donorEmail' defaultValue={user?.email} disabled required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Pickup Location" />
                        </div>
                        <TextInput name='pickupLocation' required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Expire Date" />
                        </div>
                        <Datepicker name="date"></Datepicker>
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Additional Notes" />
                        </div>
                        <TextInput name='note' required />
                    </div>
                    <div className=' mt-3'>
                        <div className="mb-2 block">
                            <Label value="Food Status" />
                        </div>
                        <TextInput name='status' defaultValue='Available' disabled required />
                    </div>
                    <input className="col-span-2 cursor-pointer w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 mt-4" type="submit" value={'Submit Request'} />
                </form>
            </div>
        </div>
    );
};

export default AddFood;