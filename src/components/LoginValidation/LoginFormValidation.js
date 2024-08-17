import React, { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider"

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

const LoginFormValidation = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  console.log(formData);
  
  
  const [errors, setErrors] = useState({})

  const navigat = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
    
  }

  const {setToken} = useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault()
    
    Axios.post('http://localhost/api/login', 
      formData,
      {headers: {
        'Content-Type': 'application/json'
      }}
    )
    .then(res => {
      setToken(res.data.token)
      alert("Login successfully");
      navigat('/admin/index');
    }).catch(err => console.log(err))
    const validationErrors = {}

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    if(formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <Col lg="5" md="7" className="center mt-6">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <h2>Please Login Your Account</h2>
              <div role="form mt-4" onSubmit={handleSubmit}>
                
                {/* email */}
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      type="email"
                      name="email"
                      placeholder='example@gmail.com'
                      autoComplete='off'
                      onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                  </InputGroup>
                </FormGroup>
                
                {/* password */}
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      type="password"
                      name="password"
                      placeholder='******'
                      onChange={handleChange}
                    />
                       {errors.password && <span>{errors.password}</span>} 
                  </InputGroup>
                </FormGroup>
              
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Done
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        </form>
    </>
    
  );
};

export default LoginFormValidation;