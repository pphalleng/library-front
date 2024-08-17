import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { format } from "date-fns";
 
function CustomerEdit() {
    const [id, setId] = useState(useParams().id)
    
    const [membercard_id, setMembershipCardId] = useState(null);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [nid, setNid] = useState('');
    const [current_address, setCurrentAddress] = useState('');

    const [isSaving, setIsSaving] = useState(false)
  
      
    useEffect(() => {
        axios.get(`http://localhost/api/customer/${id}`)
        .then(function (response) {
            let customer = response.data.result

            const date = new Date(customer.date_of_birth); // Or your date object
            const formattedDate = date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });


            setMembershipCardId(customer.membercard_id);
            setFirstName(customer.first_name);
            setLastName(customer.last_name);
            setAge(customer.age);
            setDateOfBirth(formattedDate);
            setNid(customer.nid);
            setCurrentAddress(customer.current_address)
        })
        // .catch(err => console.log(err))
        // console.log(date_of_birth);
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.put(`http://localhost/api/customers/${id}`, {
            membercard_id: membercard_id,
            first_name: first_name,
            last_name: last_name,
            age: age,
            date_of_birth: date_of_birth,
            nid: nid,
            current_address: current_address
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Updated Successfully!',
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
                <h2 className="text-center mt-5 mb-3">Edit customer</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/admin/sales">View All customers
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Membercard ID</label>
                                <input 
                                    onChange={(event)=>{setMembershipCardId(event.target.value)}}
                                    value={membercard_id}
                                    type="text"
                                    className="form-control"
                                    id="membercard_id"
                                    name="membercard_id"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input 
                                    onChange={(event)=>{setFirstName(event.target.value)}}
                                    value={first_name}
                                    type="text"
                                    className="form-control"
                                    id="first_name"
                                    name="first_name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <input 
                                    onChange={(event)=>{setLastName(event.target.value)}}
                                    value={last_name}
                                    type="text"
                                    className="form-control"
                                    id="last_name"
                                    name="last_name"/>
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
                                <label htmlFor="name">Date of Birth</label>
                                <input 
                                    onChange={(event)=>{setDateOfBirth(event.target.value)}}
                                    value={date_of_birth}
                                    type="date"
                                    className="form-control"
                                    id="date_of_birth"
                                    name="date_of_birth"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">National Id Card</label>
                                <input 
                                    onChange={(event)=>{setNid(event.target.value)}}
                                    value={nid}
                                    type="text"
                                    className="form-control"
                                    id="nid"
                                    name="nid"/>
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
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
}
  
export default CustomerEdit;