import React, { useState } from 'react';
import axios from "axios";
import {Link,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const Person = (props) => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const[nameOfPlace, setNameOfPlace] = useState("");
    const navigate = useNavigate();
    const [errors,setErrors] = useState([]);

    const submitHandler = (e)=>{

    e.preventDefault();

    const newPerson = {
        firstName,
        lastName,
        date,
        price,
        description,
        nameOfPlace
    }

    axios.post("http://localhost:8000/api/person", newPerson)
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        setFirstName("");
        setLastName("");
        setDate("");
        setPrice("");
        setDescription("");
        setNameOfPlace("");
        navigate("/");
    })
    .catch((err)=>{console.log(err.response.data)
            const errorRes = err.response.data.error.errors;
            const errorArray = [];
                for(const key of Object.keys(errorRes)){
                errorArray.push(errorRes[key].message);}
                setErrors(errorArray)
            
            })
    }

    return (
    <div className="container">
        <div className='navbar'>
        <h1> The Great Finance Tracker
            <Link to={`/`}> Home </Link></h1>
        </div><hr />
        
        <div className="container1 border border-dark">
        <h1>Create a New Spending: </h1>
    <form onSubmit={submitHandler} className="border p-3 text-left">
        {errors.length > 0 && errors.map((error,i)=> (
            <p key={i}>{error}</p>
        ))}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name: </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" type="text" className="form-control"/>
                    </div>
            </div>
            <br />
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Last Name: </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} name="lastName" type="text" className="form-control" />
                    </div>
            </div>
            <br />
            <div className="form-grou row">
                <label className="col-sm-2 col-form-label">Date: </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setDate(e.target.value)} value={date} name="date" type="date" className="form-control" />
                    </div>
            </div>
            <br />
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Price (in dollars): </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setPrice(e.target.value)} value={price} name="price" type="text" className="form-control" />
                    </div>
            </div>
            <br />
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description: </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text" className="form-control"/>
                    </div>
            </div>
            <br />
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name Of Place: </label>
                    <div className="col-sm-10">
                    <input onChange={(e) => setNameOfPlace(e.target.value)} value={nameOfPlace} name="nameOfPlace" type="text" className="form-control"/>
                    </div>
        </div>
        <br />
        <div className="form-group row">
            <div className="col-sm-12">
                <input className="submit-input btn btn-dark" type="submit" value="Create"/> 
            </div>
        </div>
</form>


</div>
</div>
    );
};

export default Person;

