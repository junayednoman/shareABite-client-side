import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth provider/AuthProvider";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Label, Modal, TextInput } from "flowbite-react";
import useAxios from "../../../custom hooks/axios hook/useAxios";
import { Link } from "react-router-dom";



const ManageFood = () => {
    const axiosSecure = useAxios();
    const [updateItem, setUpdateItem] = useState({})
    // states for modal
    const { additional_notes, quantity, pickup_location, food_image, food_name } = updateItem;
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }
    // modal end

    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])


    const handleOpenModal = (original) => {
        setOpenModal(true)
        setUpdateItem(original)

    }

    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.name.value;
        const food_image = form.foodImage.value;
        const pickup_location = form.pickupLocation.value;
        const quantity = form.quantity.value;
        const additional_notes = form.note.value;

        const foodData = { food_name, food_image, pickup_location, quantity, additional_notes, }

        axiosSecure.put(`/food/${updateItem._id}`, foodData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount === 1) {
                    Swal.fire(
                        'Success',
                        'Food added successfully',
                        'success'
                    )
                }
            })
    }


    const handleDelete = (original) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/my-foods/${original._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount === 1) {
                            Swal.fire(
                                'Success',
                                'Item deleted successfully!',
                                'success'
                            )
                        }
                        const remainingData = data.filter(singleData => singleData._id !== original._id)
                        const newData = [...remainingData];
                        setData(newData)
                    })
            }
        });

    }

    const columns = [
        {
            accessorKey: 'food_name',
            header: 'Food Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'expire_date',
            header: 'Expire Date',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'pickup_location',
            header: 'Pickup Location',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'quantity',
            header: 'Quantity',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'Actions',
            cell: (props) => (
                <div className="gap-3 flex">
                    <button className="block" onClick={() => handleOpenModal(props.row.original)}><AiOutlineEdit></AiOutlineEdit></button>
                    <button className="block" onClick={() => handleDelete(props.row.original)}><AiOutlineDelete></AiOutlineDelete></button>
                    <Link to={`/manage-single-food/${props.row.original._id}`} className="block font-medium underline">Manage</Link>
                </div>
            )
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });


    useEffect(() => {
        axiosSecure.get(`/my-foods?email=${user.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [user])


    return (
        <div className="md:py-24 py-12">
            <Helmet>
                <title>
                    Manage My Food | ShareABite
                </title>
            </Helmet>
            <div className="wrapper">
                {table.getHeaderGroups().map((headerGroup) => (
                    <div className="tr" key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <div className="th" key={header.id}>
                                {header.column.columnDef.header}
                            </div>
                        ))}
                    </div>
                ))}

                {/* {
 */}
                {
                    table.getRowModel().rows.map((row) => (
                        <div key={row.id} className="tr">
                            {row.getVisibleCells().map((cell) => (
                                <div key={cell.id} className="td">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </div>
                            ))}
                        </div>
                        // <div></div>
                    ))
                }
            </div>


            {/* *=-=-=-=-=-=-=-=-=-=-=-=-= MODAL START -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <Modal show={openModal} size="3xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update food item</h3>
                        <form onSubmit={handleUpdateFood} className='grid grid-cols-2 gap-3 items-center'>
                            <div>
                                <div className="mb-2 block">
                                    <Label value="Food Name" />
                                </div>
                                <TextInput defaultValue={food_name} name='name' required />
                            </div>
                            <div className=''>
                                <div className="mb-2 block">
                                    <Label value="Food Image" />
                                </div>
                                <TextInput defaultValue={food_image} name='foodImage' required />
                            </div>
                            <div className='mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Food Quantity" />
                                </div>
                                <TextInput defaultValue={quantity} name='quantity' required />
                            </div>

                            <div className=' mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Pickup Location" />
                                </div>
                                <TextInput defaultValue={pickup_location} name='pickupLocation' required />
                            </div>
                            <div className='col-span-2 mt-3'>
                                <div className="mb-2 block">
                                    <Label value="Additional Notes" />
                                </div>
                                <TextInput defaultValue={additional_notes} name='note' required />
                            </div>
                            <input className="col-span-2 cursor-pointer w-full block rounded-lg bg-[#9dc020e7] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#9CC020] focus:outline-none focus:ring-4  dark:bg-cyan-600 dark:hover:bg-cyan-700 mt-4" type="submit" value={'Update Now'} />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* *=-=-=-=-=-=-=-=-=-=-=-=-= MODAL END -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        </div>
    );
};

export default ManageFood;