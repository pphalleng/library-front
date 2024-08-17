/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  
  const CreateMembershipCard = () => {
    const [inputData, setInputData] = useState({cardholder_name: '', issued_date: '', expired_date: '', type: ''});
    const navigat = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      console.log("inputData");
      console.log(inputData);

      Axios.post('http://localhost/api/membershipCards', inputData)
       .then(res => {
        alert("Create MembershipCard successfully");
        navigat('/admin/MemberCardShip');
      }).catch(err => console.log(err))

    }
    return (
      <>
        <Col lg="5" md="7" className="center mt-6">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <h2>Create MembershipCard</h2>
              <Form role="form mt-4" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="cardholder_name"
                      type="text"
                      name="cardholder_name"
                      autoComplete="cardholder_name"
                      onChange={e =>setInputData({...inputData, cardholder_name: e.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        placeholder="Issued date"
                        type="date"
                        name="issued_date"
                        autoComplete="issued_dateh"
                        onChange={e =>setInputData({...inputData, issued_date: e.target.value})}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <Input
                        placeholder="Expired date"
                        type="date"
                        name="expired_date"
                        autoComplete="expired_date"
                        onChange={e =>setInputData({...inputData, expired_date: e.target.value})}
                      />
                    </InputGroup>
                  </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Type"
                      type="text"
                      name="type"
                      autoComplete="type"
                      onChange={e =>setInputData({...inputData, type: e.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Create
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default CreateMembershipCard;
  