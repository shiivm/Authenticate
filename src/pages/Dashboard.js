import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Table,Nav } from "react-bootstrap";

import { getUsers } from "../action/userAction";
import { logout } from '../action/authActions'

const Dashboard = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    props.getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUsers(props.users);
    if (props.users.length === 0) {
      setErrorMsg("No user");
    } else {
      setErrorMsg("");
    }
  }, [props.users]);

  useEffect(() => {
    if (props.error) {
      setErrorMsg(props.error);
    }
  }, [props.error]);

  return (
    <Container>
      <Row>
      {props.isAuthenticated && (
        <Nav className="ml-auto">
          <Nav.Link onClick={props.logout}>
            Logout
          </Nav.Link>
        </Nav>
      )}
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className="text-center">User List</h1>
        </Col>
      </Row>
      {errorMsg && (
        <Row>
          <Col className="text-center">{errorMsg}</Col>
        </Row>
      )}
      {users && users.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {(users || []).map((user) => {
              return (
                <tr key = {user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    error: state.error.itemError,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    logout : () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
