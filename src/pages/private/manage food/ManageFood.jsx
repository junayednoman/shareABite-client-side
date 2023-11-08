import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth provider/AuthProvider";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Modal } from "flowbite-react";



const ManageFood = () => {
    // states for modal
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }
    // modal end


    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])


    const handleEdit = (original) => {
        setOpenModal(true)
        Axios.get(`http://localhost:5000/foods/${original._id}`)
            .then(res => {
                console.log(res.data);
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
                axios.delete(`http://localhost:5000/my-foods/${original._id}`)
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
                        const newData = [...remainingData, data];
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
                    <button className="block" onClick={() => handleEdit(props.row.original)}><AiOutlineEdit></AiOutlineEdit></button>
                    <button className="block" onClick={() => handleDelete(props.row.original)}><AiOutlineDelete></AiOutlineDelete></button>
                    <button className="block font-medium underline" onClick={() => handleDelete(props.row.original)}>Manage</button>
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
        axios.get(`http://localhost:5000/my-foods?email=${user.email}`)
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
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Submit a request for this food</h3>

                    </div>
                </Modal.Body>
            </Modal>
            {/* *=-=-=-=-=-=-=-=-=-=-=-=-= MODAL END -=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
        </div>
    );
};

export default ManageFood;