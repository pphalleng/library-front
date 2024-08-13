import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { format } from "date-fns";
import { CardColumns } from "reactstrap";

function ProjectEdit() {
  const [id, setId] = useState(useParams().id);

  const [first_name, setfirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setnid] = useState("");
  const [age, setAge] = useState("");
  const [date_of_birth, setbirthOfdate] = useState("");
  const [current_address, setCurrentAddress] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost/api/librarains/${id}`)
      .then(function (response) {
        let librarain = response.data.result;

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
        setCurrentAddress(librarain.current_address);
      });

    // .catch(err => console.log(err))
    // console.log(date_of_birth);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    axios
      .put(`http://localhost/api/librarains/${id}`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        nid: nid,
        age: age,
        date_of_birth: date_of_birth,
        current_address: current_address,
      })
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: "Project updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "An Error Occured!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-3"> List </h2>
      <div className="card">
        <div className="card-header">
          <Link className="btn btn-outline-info float-right" to="/admin/sales">
            View All Librarians
          </Link>
        </div>

        <div className="container mt-5">
            <DataView>
                columns = {CardColumns}
                data = {data}
            </DataView>
        </div>




        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ border: "1px solid black", padding: "8px" }}>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>NID</th>
              <th>Age</th>
              <th>Birthday</th>
              <th>Current Address</th>
            </tr>
          </thead>
          <tbody>
            {librarianData.map((librarian) => (
              <tr key={librarian.id} >
                <div style={{ border: "1px solid black", padding: "8px" }}>
                <td>
                  {librarain.first_name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {librarian.name}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {librarian.email}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {librarian.phone}
                </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectEdit;
