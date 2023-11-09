import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../../custom hooks/axios hook/useAxios";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
    const requestedFood = useLoaderData();
    console.log(requestedFood);
    const [singleFood, setSingleFood] = useState({})
    const axiosSecure = useAxios();

    const params = useParams();

    useEffect(() => {
        axiosSecure.get(`/foods/${params.id}`)
            .then(res => {
                setSingleFood(res.data)
            })
    }, [])

    const handleFoodStatus = () => {
        const food_status = 'Delivered';
        const foodData = { food_status };
        axiosSecure.patch(`/foods/${params.id}`, foodData)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    Swal.fire(
                        'Success',
                        'Status changed successfully on general food collection',
                        'success'
                    )

                    // change status on food request collection
                    axiosSecure.patch(`/food-requests/${params.id}`, foodData)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.modifiedCount === 1) {
                                Swal.fire(
                                    'Success',
                                    'Status changed successfully on request collection',
                                    'success'
                                )

                            }
                        })

                }
            })

    }




    return (
        <div className="spacer">
            <div className="wrapper  border">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="col-span-1 p-10">
                        <img className="w-[120px]" src={singleFood.food_image} alt="" />
                        <h5 className="font-semibold">{singleFood.food_name}</h5>
                        <p><span className="font-semibold">Expire Date: </span>{singleFood.expire_date}</p>
                        <p><span className="font-semibold">Quantity: </span>{singleFood.quantity}</p>
                        <p className="text-[#9CC020]"><span className="font-semibold">Status: </span>{singleFood.food_status}</p>
                    </div>
                    <div className="border-l p-10">
                        {!requestedFood ? <h4>No request for this food</h4> : <>
                            <div>
                                <h5 className="font-semibold mb-6 text-lg">Requester Info</h5>
                                <img className="border rounded-md w-[100px] mb-5" src={requestedFood.requesterImg} alt="" />
                                <h5 className="font-semibold">{requestedFood.donorName}</h5>
                                <p><span className="font-semibold">Email: </span>{requestedFood.donorEmail}</p>
                                <p><span className="font-semibold">Request Date: </span>{requestedFood.requestDate}</p>

                            </div>
                        </>}
                    </div>
                </div>
            </div>
            {requestedFood && <Button onClick={handleFoodStatus} className="mx-auto mt-7 bg-[#9CC020]">Deliver This Food</Button>}
        </div>
    );
};

export default ManageSingleFood;