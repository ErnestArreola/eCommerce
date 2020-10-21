import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/userActions';

import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";


//Links import 
import {Lock} from '@styled-icons/material';


function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));

  }
  return <div className="form">
         <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
    <form onSubmit={submitHandler}>
    <Container>
        <Row>
          <Col className = "ml-auto mr-auto" lg="6">
            <Card className = "card-register ml-auto mr-auto">
              <h3 className ="card-title"> Create an account</h3>

              <div className = "social-line text-center">
              </div>
              <Form className = "register-form">
                <label className = "label-register"> Email </label>
                <Input className  = "input-register" type = "text" id = "email" onChange={(e) => setEmail(e.target.value)} />
                <label className = "label-register"> Confirm Email </label>
                <Input className  = "input-register"type = "email" id = "reEmail" onChange={(e) => setReEmail(e.target.value)} />
                <label className = "label-register"> Password </label>
                <Input  className  = "input-register" type = "password" id = "password" onChange = {(e) => setPassword(e.target.value)}/>
                <label className = "label-register"> Confirm Password </label>
                <Input  className  = "input-register" type = "password" id = "rePassword" onChange = {(e) => setRePassword(e.target.value)}/>
                <label className = "label-register"> Name </label>
                <Input className  = "input-register"type = "name" id = "name" onChange =  {(e) => setName(e.target.value)} />
                <Button block className = "btn-round" colro = "danger" type = "submit">
                  Register
                </Button>
                <div className = "forgot">
                  <p style = {{color: "black", padding: "30px 0px"}}> 
                    <a style = {{fontSize: "19px"}}>  Already have an account? </a>
                    <a style = {{fontWeight: "520", fontSize: "17px"}} href = "/singin"> Sigin In</a>
                  </p>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type= "name" name = "name" id = "name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account? <Link to="/signin">Sign-in</Link>
        </li>

      </ul> */}
    </form>
    </div>
}
export default RegisterScreen;