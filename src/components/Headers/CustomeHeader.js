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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import {useEffect, useState} from 'react'



import Axios from 'axios'

const Header = () => {

  const[Count_category, setData] = useState([]);
  const[Count_product, setProduct] = useState([]);
  const[Count_sale, setSale] = useState([]);


  useEffect(
    ()=>{
       Axios.get('http://crud-backend.test/api/count_category')
       .then(function (response) {
        console.log("get data from database ", response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      Axios.get('http://crud-backend.test/api/count_product')
      .then(function (res) {
      console.log("get product from database ", res.data);
      setProduct(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      Axios.get('http://crud-backend.test/api/count_sale')
      .then(function (res) {
      console.log("get product from database ", res.data);
      setSale(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    },[]
  )

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
  
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
