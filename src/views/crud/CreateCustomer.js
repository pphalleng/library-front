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
import Axios from "axios";

import {
  Button,
  Card,
  Container,
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
  select,
} from "reactstrap";

// core components
import CustomeHeader from "components/Headers/CustomeHeader.js";

const CreateLibrarian = () => {
  const [inputData, setInputData] = useState({
    membership_card_id: "",
    first_name: "",
    last_name: "",
    age: "",
    date_of_birth: "",
    nid: "",
    current_address: "",
  });
  const navigat = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("inputData");
    console.log(inputData);

    Axios.post("http://localhost/api/librarains/create", inputData)
      .then((res) => {
        alert("create category successfully");
        navigat("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <CustomeHeader />
      <Container className="mt--7" fluid>
        <Col lg="5" md="7" className="center mt-6">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <h2>Create Customer</h2>
              <Form role="form mt-4" onSubmit={handleSubmit}>
                {/* select membership card form MembershipCard table */}
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <select
                      placeholder="Membership Card Id"
                      type="text"
                      name="card_id"
                      autoComplete="card_id"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          first_name: e.target.value,
                        })
                      }
                    ></select>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="First Name"
                      type="text"
                      name="first_name"
                      autoComplete="first_name"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          first_name: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Last Name"
                      type="text"
                      name="last_name"
                      autoComplete="last_name"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          last_name: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Age"
                      type="number"
                      name="age"
                      autoComplete="age"
                      onChange={(e) =>
                        setInputData({ ...inputData, age: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Date Of Birth"
                      type="date"
                      name="date_of_birth"
                      autoComplete="date_of_birth"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          date_of_birth: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="National Id Card"
                      type="text"
                      name="nid"
                      autoComplete="nid"
                      onChange={(e) =>
                        setInputData({ ...inputData, nid: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Current Address"
                      type="text"
                      name="current_address"
                      autoComplete="current_address"
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          current_address: e.target.value,
                        })
                      }
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
      </Container>
    </>
  );
};

export default CreateLibrarian;
