import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { format } from "date-fns";
 
function MembershipCardEdit() {
    const [id, setId] = useState(useParams().id)

    const [cardholder_name, setCardholderName] = useState('');
    const [issued_date, setIssuedDate] = useState('');
    const [expired_date, setExpiredDate] = useState('');
    const [type, setType] = useState('');
    const [isSaving, setIsSaving] = useState(false)
  
      
    useEffect(() => {
        axios.get(`http://localhost/api/memberShipCards/${id}`)
        .then(function (response) {
            let memberShipCard = response.data.result

            // const date = new Date(memberShipCard.date_of_birth); // Or your date object
            // const formattedDate = date.toLocaleDateString('en-GB', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            // });

            setCardholderName(memberShipCard.cardholder_name);
            setIssuedDate(memberShipCard.issued_date);
            setExpiredDate(memberShipCard.expired_date);
            setType(memberShipCard.type)
            
        })
        // .catch(err => console.log(err))
        // console.log(date_of_birth);
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.put(`http://localhost/api/memberShipCards/${id}`, {
            cardholder_name: cardholder_name,
            issued_date: issued_date,
            expired_date: expired_date,
            type: type
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
                <h2 className="text-center mt-5 mb-3">Edit Membership Card</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/admin/sales">View All Membership Cards
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Cardholder Name</label>
                                <input 
                                    onChange={(event)=>{setCardholderName(event.target.value)}}
                                    value={cardholder_name}
                                    type="text"
                                    className="form-control"
                                    id="cardholder_name"
                                    name="cardholder_name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Issued Date</label>
                                <input 
                                    onChange={(event)=>{setIssuedDate(event.target.value)}}
                                    value={issued_date}
                                    type="text"
                                    className="form-control"
                                    id="issued_date"
                                    name="issued_date"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Expired Date</label>
                                <input 
                                    onChange={(event)=>{setExpiredDate(event.target.value)}}
                                    value={expired_date}
                                    type="text"
                                    className="form-control"
                                    id="expired_date"
                                    name="expired_date"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Type</label>
                                <input 
                                    onChange={(event)=>{setType(event.target.value)}}
                                    value={type}
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"/>
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
  
export default MembershipCardEdit;