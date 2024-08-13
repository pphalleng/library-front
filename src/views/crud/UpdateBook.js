import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import { format } from "date-fns";
 
function BookEdit() {
    const [id, setId] = useState(useParams().id)

    const [cover_name, setCoverName] = useState('');
    const [published_year, setPublishedYear] = useState('');
    const [category_type, setCategoryType] = useState('');
    const [barcode, setBarcode] = useState('');
    const [status, setStatus] = useState('');
    const [isSaving, setIsSaving] = useState(false)
  
      
    useEffect(() => {
        axios.get(`http://localhost/api/books/${id}`)
        .then(function (response) {
            let book = response.data.result

            // const date = new Date(book.date_of_birth); // Or your date object
            // const formattedDate = date.toLocaleDateString('en-GB', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            // });

            setCoverName(book.cover_name);
            setPublishedYear(book.published_year);
            setCategoryType(book.category_type);
            setBarcode(book.barcode);
            setStatus(book.status)
            
        })
        // .catch(err => console.log(err))
        // console.log(date_of_birth);
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.put(`http://localhost/api/books/${id}`, {
            cover_name: cover_name,
            published_year: published_year,
            category_type: category_type,
            barcode: barcode,
            status: status
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
                <h2 className="text-center mt-5 mb-3">Edit Book</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/admin/sales">View All Books
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Cover Name</label>
                                <input 
                                    onChange={(event)=>{setCoverName(event.target.value)}}
                                    value={cover_name}
                                    type="text"
                                    className="form-control"
                                    id="cover_name"
                                    name="cover_name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Published Year</label>
                                <input 
                                    onChange={(event)=>{setPublishedYear(event.target.value)}}
                                    value={published_year}
                                    type="text"
                                    className="form-control"
                                    id="published_year"
                                    name="published_year"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Category Type</label>
                                <input 
                                    onChange={(event)=>{setCategoryType(event.target.value)}}
                                    value={category_type}
                                    type="text"
                                    className="form-control"
                                    id="category_type"
                                    name="category_type"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Barcode</label>
                                <input 
                                    onChange={(event)=>{setBarcode(event.target.value)}}
                                    value={barcode}
                                    type="text"
                                    className="form-control"
                                    id="barcode"
                                    name="barcode"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Status</label>
                                <input 
                                    onChange={(event)=>{setStatus(event.target.value)}}
                                    value={status}
                                    type="text"
                                    className="form-control"
                                    id="status"
                                    name="status"/>
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
  
export default BookEdit;