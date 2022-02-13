import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [cancel, setCancel] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [cancel])

    // Delete Ordered Food Item by ID
    const handleDelete = (id) => {
        const confirm = window.confirm(
            "Are You Sure? You are going to cancel your order"
        );

        if (confirm) {
            axios
                .delete(`http://localhost:5000/delteOrder/${id}`)
                .then((res) => {
                    if (res.data.deletedCount) {
                        alert('Deleted successfully')

                        setCancel(res.data);
                    }
                })
                .then((data) => setCancel(data));
        }
    };

    return (
        <div className="my-5">
            <h1 className="fw-normal bg-white d-flex justify-content-center">My Orders</h1>

            {orders.length ? (
                <div className="container">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr className="">
                                <th>Product</th>
                                <th>Customer Name</th>
                                <th>Email</th>

                                <th>Price</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        {orders?.map((order) => (
                            <tbody key={order._id}>
                                <tr className="py-5 bg-white text-white">
                                    <td>
                                        {console.log(order)}
                                        <div className="d-flex align-items-center justify-content-between">

                                            {order.Name}
                                        </div>
                                    </td>

                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>
                                    <td>
                                        <span className="fw-bold">${order.Price}</span>
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleDelete(order._id)}
                                        >
                                            Cancel Order
                                        </button>
                                    </td>

                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            ) : (
                <h1>You have 0 Orders</h1>
            )}
        </div>
    );
};

export default MyOrder;