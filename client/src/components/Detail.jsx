import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams,useNavigate, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Detail = (props) => {
    const navigate = useNavigate();
    const [person, setPerson] = useState({})
    useState(person.date ? new Date(person.date) : null);
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/person/" + id)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);
    
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/person/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
        }
        return (
            <div className="container">
                <div className='navbar'>
                <h1> The Great Family Finance Tracker:
                    <Link to={`/`}> Home </Link></h1>
                </div><hr />
                
                <div className="container1 border border-dark">
                <h1>Details about {person.firstName}'s Spending </h1>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">First Name: </label>
                            <div className="col-sm-10">
                            {person.firstName}
                            </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Last Name: </label>
                            <div className="col-sm-10">
                            {person.lastName}
                            </div>
                    </div>
                    <br />
                    <div className="form-grou row">
                        <label className="col-sm-2 col-form-label">Date: </label>
                            <div className="col-sm-10">
                            {person.date ? person.date.substring(0, 10) : ""}
                            </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Price (in dollars): </label>
                            <div className="col-sm-10">
                            {person.price}
                            </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description: </label>
                            <div className="col-sm-10">
                            {person.description}
                            </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name Of Place: </label>
                            <div className="col-sm-10">
                            {person.nameOfPlace}
                            </div>
                    </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
            <Link to={'/api/person/edit/' + person._id} className="btn btn-dark mx-2" >Update</Link>
            <button className="btn btn-dark mx-2" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}
export default Detail;