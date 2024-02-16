import axios, { Axios } from "axios";
import React from "react";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            user_name: "",
            user_pan: "",
            user_mobile: "",
            user_address: ""
        }
    }

    getAddress = (e) => {
        this.setState({ user_address: e.target.value });
    }

    saveForm = async (e) => {
        e.preventDefault();
        alert('Congrats Successfully Submitted Form');
        console.log(this.state);


        // Axios
        await axios.post('http://localhost:3000/User', this.state);

        // axios.post('http://localhost:3000/User', this.state);   

        // axios.post('http://localhost:3000/User', this.state).
        //     then((response) => {
        //         this.setState({
        //             user_name: response.data.user_name,
        //             user_pan: response.data.user_pan,
        //             user_mobile: response.data.user_mobile,
        //             user_doc: response.data.user_doc,
        //             user_address: response.data.user_address
        //         })
        //     })

        this.setState({
            user_name: '',
            user_pan: '',
            user_mobile: '',
            user_doc: '',
            user_address: ''
        })
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className="text-center fw-bold mb-4">Home Data</h1>

                    <form onSubmit={this.saveForm}>
                        {/* Nested Grid */}
                        <div className="row  fw-bold bg-dark text-light p-4">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="username">Enter Your Name: </label>
                                    <input type="text" className='form-control' name="username" id="username"
                                        value={this.state.user_name} onChange={(e) => this.setState({ user_name: e.target.value })}
                                        placeholder='Enter Your Name' />
                                </div>
                            </div>

                            <div className="col-md-6 my-4">
                                <div className="form-group">
                                    <label htmlFor="userpan">Enter Your PAN:</label>
                                    <input type="text" className='form-control' name="userpan" id="userpan"
                                        value={this.state.user_pan} onChange={(e) => this.setState({ user_pan: e.target.value })}
                                        placeholder='Enter Your PAN' />
                                </div>
                            </div>

                            <div className="col-md-6 my-4">
                                <div className="form-group">
                                    <label htmlFor="usermobile">Enter Your Mobile</label>
                                    <input type="text" className='form-control' name="usermobile" id="usermobile"
                                        value={this.state.user_mobile} onChange={(e) => this.setState({ user_mobile: e.target.value })}
                                        placeholder='Must Be 10 Digit ' />
                                </div>
                            </div>


                            <div className="col-md-12 my-4">
                                <div className="form-group">
                                    <label htmlFor="useraddress">Enter Your Address</label>
                                    <select name="useraddress" id="useraddress" className='form-select'
                                        value={this.state.user_address} onChange={(e) => this.getAddress(e)}>
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
                </div >
            </>
        )
    }
}