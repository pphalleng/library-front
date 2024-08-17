import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { format } from "date-fns";
 
function ProjectEdit() {
    const [id, setId] = useState(useParams().id)
    
    const [first_name, setfirstName] = useState('');
    const [last_name, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [nid, setnid] = useState('');
    const [age, setAge] = useState('');
    const [date_of_birth, setbirthOfdate] = useState('');
    const [current_address, setCurrentAddress] = useState('');
    const [isSaving, setIsSaving] = useState(false)
  
      
    useEffect(() => {
        axios.get(`http://localhost/api/librarains/${id}`)
        .then(function (response) {
            let librarain = response.data.result

            // const date = new Date(librarain.date_of_birth); // Or your date object
            // const formattedDate = date.toLocaleDateString('en-GB', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            // });

            setfirstName(librarain.first_name);
            setlastName(librarain.last_name);
            setEmail(librarain.email);
            setnid(librarain.nid);
            setAge(librarain.age);
            setbirthOfdate(formattedDate);
            setCurrentAddress(librarain.current_address)
            
        })

        // .catch(err => console.log(err))
        // console.log(date_of_birth);
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.put(`http://localhost/api/librarains/${id}`, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            nid: nid,
            age: age,
            date_of_birth: date_of_birth,
            current_address: current_address
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Project updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
        });
    }
  
  
    return (
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Edit Librarians</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/admin/sales">View All Librarians
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input 
                                    onChange={(event)=>{setfirstName(event.target.value)}}
                                    value={first_name}
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <input 
                                    onChange={(event)=>{setlastName(event.target.value)}}
                                    value={last_name}
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    name="last_name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input 
                                    onChange={(event)=>{setEmail(event.target.value)}}
                                    value={email}
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">National Id Card</label>
                                <input 
                                    onChange={(event)=>{setnid(event.target.value)}}
                                    value={nid}
                                    type="text"
                                    className="form-control"
                                    id="nid"
                                    name="nid"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Age</label>
                                <input 
                                    onChange={(event)=>{setAge(event.target.value)}}
                                    value={age}
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    name="age"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Date Of Birth</label>
                                <input 
                                    onChange={(event)=>{setbirthOfdate(event.target.value)}}
                                    value={date_of_birth}
                                    type="date"
                                    className="form-control"
                                    id="date_of_birth"
                                    name="date_of_birth"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Current Address</label>
                                <input 
                                    onChange={(event)=>{setCurrentAddress(event.target.value)}}
                                    value={current_address}
                                    type="text"
                                    className="form-control"
                                    id="current_address"
                                    name="current_address"/>
                            </div>
                            <button 
                                disabled={isSaving}
                                onClick={handleSave}   
                                type="button"
                                className="btn btn-outline-success mt-3 text-center">
                                Update Project
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
}
  
export default ProjectEdit;