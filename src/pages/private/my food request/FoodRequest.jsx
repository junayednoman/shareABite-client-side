import { Helmet } from "react-helmet-async";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import useAxios from "../../../custom hooks/axios hook/useAxios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../auth provider/AuthProvider";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const FoodRequest = () => {
    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const { donationMoney, food_status, requestDate, expireDate, foodName, pickupLocation, donorName } = data;

    useEffect(() => {
        axiosSecure.get(`/food-requests?email=${user.email}`)
            .then(res => {
                setData(res.data)
            })
    }, [])


    const columns = [
        {
            accessorKey: 'donorName',
            header: 'Donor Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'food_status',
            header: 'Food Status',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'foodName',
            header: 'Food Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'pickupLocation',
            header: 'Pickup Location',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'expireDate',
            header: 'Expire Date',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'requestDate',
            header: 'Request Date',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'donationMoney',
            header: 'Donation Money',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            header: 'Actions',
            cell: (props) => (
                <div className="gap-3 flex">
                    <button className="block" onClick={() => handleCancelRequest(props.row.original)}>Cancel Request</button>
                </div>
            )
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    const handleCancelRequest = (origin) => {
        if (origin.food_status === "Delivered") {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can not cancel any delivered request",
            });
        }

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
                axiosSecure.delete(`/food-requests/${origin._id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire(
                                'Success',
                                'Successfully deleted this request',
                                'success'
                            )
                            const filteredItem = data.filter(singleData => singleData._id !== origin._id)
                            const newItem = [...filteredItem];
                            setData(newItem)
                        }
                    })
            }

        });



    }


    return (
        <div>
            <Helmet>
                <title>My Food Request | ShareABite - Waste Less, Feed</title>
            </Helmet>
            <div className="spacer">
                <div className="wrapper">
                    <h2 className="mb-5 text-3xl font-semibold">My food request</h2>
                    {
                        data.length > 0 ? <div>
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
                        </div> : <>
                            <img className="mx-auto w-[150px]" src="https://media.tenor.com/QEcK2GmBJH4AAAAi/frog-frog-dog-log.gif" alt="" />
                            <h4 className="font-semibold mt-5 mb-14 text-center text-xl md:text-4xl">No request found!</h4>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodRequest;