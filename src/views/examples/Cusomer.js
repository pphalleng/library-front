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
import {useEffect, useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import CustomeHeader from "components/Headers/CustomeHeader.js";

const Tables = () => {

  const[data, setData] = useState([]);
  const[MBCS, getData] = useState([]);

  useEffect(
    ()=>{
       Axios.get('http://localhost/api/customers')
       .then(function (response) {
        console.log("get data from database ", response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  []);
  useEffect(
    ()=>{
      Axios.get('http://localhost/api/membershipCards/list')
      .then(function (response) {
       console.log("get data from database member", response.data);
       getData(response.data);
     })
     .catch(function (error) {
       console.log(error);
     });
    },[])
    const MBCS_arr = MBCS.map((data, index) =>{
    console.log("MBCS" + data);

  })
  

  const category_arr = data.map((data, index) => {
    console.log("index" + data);
    
    return (
      <tr>
        <td>
          <Media>
            <span className="mb-0 text-sm">
              {data.first_name}
            </span>
          </Media>
        </td>
        <td>{data.last_name}</td>
        <td>{data.age}</td>
        <td>{data.date_of_birth}</td>
        <td>{data.nid}</td>
        <td>{data.current_address}</td>
        <td>{data.membership_card_id}</td>

        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                to="/admin/user-profile" tag={Link}
              >
                Show
              </DropdownItem>
              <DropdownItem
                to={"/admin/edit-customer/" + data.id} tag={Link}
              >
                Edit
              </DropdownItem>
              <DropdownItem
                to={"/admin/edit-librarian/" + data.id} tag={Link}
              >
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    )
  })


  return (
    <>
      <CustomeHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List all Customer record</h3>
                <div className="col text-right">
                <div className="col text-right">
                  <Link to="/admin/create-Customer" className="btn btn-primay">Create Customer</Link>
                </div>
                  </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">first Name</th>
                    <th scope="col">last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">National ID Card</th> 
                    <th scope="col">Current Address</th>
                    <th scope="col">MemberCardShip</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {category_arr}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
