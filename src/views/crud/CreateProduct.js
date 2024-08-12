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
  
  const CreateCategory = () => {
    const [inputData, setInputData] = useState({name: '', description: '', category_id: '', price: ''});
    const navigat = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      console.log("inputData");
      console.log(inputData);

      Axios.post('http://crud-backend.test/api/product', inputData)
       .then(res => {
        alert("create category successfully");
        navigat('/');
      }).catch(err => console.log(err))

    }
    return (
      <>
        <Col lg="5" md="7" className="center mt-6">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <h2>Create Product</h2>
              <Form role="form mt-4" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      onChange={e =>setInputData({...inputData, name: e.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Description"
                      type="text"
                      name="description"
                      autoComplete="description"
                      onChange={e =>setInputData({...inputData, description: e.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Category_id"
                      type="text"
                      name="Category_id"
                      autoComplete="Category_id"
                      onChange={e =>setInputData({...inputData, category_id: e.target.value})}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Price"
                      type="text"
                      name="Price"
                      autoComplete="Price"
                      onChange={e =>setInputData({...inputData, price: e.target.value})}
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
  
  export default CreateCategory;
  