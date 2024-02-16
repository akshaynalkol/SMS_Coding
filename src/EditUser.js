import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
    const nav = useNavigate();

    // var data = useParams();
    // console.log(data.id);
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({ user_name: "", user_pan: "", user_mobile: "", user_address: "" });

    const FetchData = async () => {
        var result = await axios.get(`http://localhost:3000/User/${id}`);
        // console.log(result);
        console.log(result.data);

        setData(result.data);
    }

    useEffect(() => {
        FetchData();
    }, [])

    const updatForm = async (e, id) => {
        e.preventDefault();
        alert('Congrats Successfully Updated Data ' + id);


        // Axios
        await axios.put(`http://localhost:3000/User/${id}`, data);

        // axios.put(`http://localhost:3000/User/${id}`, data);

        // axios
        //     .put(`http://localhost:3000/User/${id}`, data)
        //     .then((response) => {
        //         setData(response.data);
        //     });   

        
        nav('/userData');
    }

    return (
        <>
            <div className="container">
                <h1 className="text-center fw-bold my-3">Edit User</h1>

                <form onSubmit={(e) => updatForm(e, id)}>
                    {/* Nested Grid */}
                    <div className="row  fw-bold bg-dark text-light p-4">

                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="username">Update Your Name: </label>
                                <input type="text" className='form-control' name="username" id="username"
                                    value={data.user_name} onChange={(e) => setData({ ...data, user_name: e.target.value })}
                                    placeholder='Update Your Name' />
                            </div>
                        </div>

                        <div className="col-md-6 my-4">
                            <div className="form-group">
                                <label htmlFor="userpan">Update Your PAN:</label>
                                <input type="text" className='form-control' name="userpan" id="userpan"
                                    value={data.user_pan} onChange={(e) => setData({ ...data, user_pan: e.target.value })}
                                    placeholder='Update Your PAN' />
                            </div>
                        </div>

                        <div className="col-md-6 my-4">
                            <div className="form-group">
                                <label htmlFor="usermobile">Update Your Mobile</label>
                                <input type="text" className='form-control' name="usermobile" id="usermobile"
                                    value={data.user_mobile} onChange={(e) => setData({ ...data, user_mobile: e.target.value })}
                                    placeholder='Must Be 10 Digit ' />
                            </div>
                        </div>


                        <div className="col-md-12 my-4">
                            <div className="form-group">
                                <label htmlFor="useraddress">Update Your Address</label>
                                <select name="useraddress" id="useraddress" className='form-select'
                                    value={data.user_address} onChange={(e) => setData({ ...data, user_address: e.target.value })} >
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Nashik">Nashik</option>
                                    <option value="Abroad">Abroad</option>
                                </select>
                            </div>
                        </div>

                        {/* Form Submit */}
                        <div className="col-md-12 mt-3 text-center">
                            <button className='btn btn-primary px-4 fw-bold'> Get A  Quote</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}