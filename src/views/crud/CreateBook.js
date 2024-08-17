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
  const [inputData, setInputData] = useState({
    cover_name: "",
    published_year: "",
    category_type: "",
    barcode: "",
    status: "",
  });
  const navigat = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("inputData");
    console.log(inputData);

    const payload = {
      cover_name: inputData.cover_name,
      published_year: inputData.published_year,
      category_type: inputData.category_type,
      barcode: inputData.barcode,
      // checkout bool
      status: false,
    }

    Axios.post("http://localhost/api/books", payload)
      .then((res) => {
        alert("Create MembershipCard successfully");
        navigat("/admin/book");
      })  
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Col lg="5" md="7" className="center mt-6">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <h2>Create Book</h2>
            <Form role="form mt-4" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Cover Name"
                    type="text"
                    name="cover_name"
                    autoComplete="cover_name"
                    onChange={(e) =>
                      setInputData({ ...inputData, cover_name: e.target.value })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Published year"
                    type="text"
                    name="published_year"
                    autoComplete="published_year"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        published_year: e.target.value,
                      })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Category_type"
                    type="text"
                    name="category_type"
                    autoComplete="category_type"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        category_type: e.target.value,
                      })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Barcode"
                    type="text"
                    name="barcode"
                    autoComplete="barcode"
                    onChange={(e) =>
                      setInputData({ ...inputData, barcode: e.target.value })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <Input
                    placeholder="Status"
                    type="text"
                    name="status"
                    autoComplete="status"
                    onChange={(e) =>
                      setInputData({ ...inputData, status: e.target.value })
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
    </>
  );
};

export default CreateMembershipCard;
