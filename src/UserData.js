import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

export default function UserData() {

    const [data, setData] = useState([]);

    const loadUser = async () => {
        var res = await axios.get('http://localhost:3000/User')
        console.log(res);
        console.log(res.data);

        setData(res.data);
    }
    console.log(data);

    useEffect(() => {
        loadUser()
    }, [])

    const deleteUser = async (id) => {
        alert(id);

        // Filter
        var res = data.filter(val => val.id !== id)
        setData(res);


        // Axios
        await axios.delete(`http://localhost:3000/User/${id}`);

        // axios.delete(`http://localhost:3000/User/${id}`);

        // axios  
        //     .delete(`http://localhost:3000/User/${id}`)
        //     .then(() => {
        //         alert("Post deleted!");
        //         //setData(null);
        //     });
    }

    return (
        <>
            <div className="container my-3">
                <h1 className="text-center fw-bold mb-4">User Data</h1>

                <table className="table table-bordered table-hover table-striped text-center">
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>PAN</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.user_name}</td>
                                        <td>{val.user_pan}</td>
                                        <td>{val.user_mobile}</td>

                                        <td>{val.user_address}</td>

                                        <td><i className="fa fa-trash fw-bold text-danger" onClick={() => deleteUser(val.id)}></i></td>
                                        <td><NavLink to={`/EditUser/${val.id}`}><i className='fa fa-edit fw-bold text-success'></i></NavLink></td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}