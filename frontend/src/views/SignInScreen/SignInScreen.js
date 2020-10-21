import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userActions';

import  {

} from "reactstrap";

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  document.documentElement.classList.remove("nav-open");
React.useEffect(() =>  {
  document.body.classList.add("register-page");
  return function cleanup() {
    document.body.classList.remove("register-page");

  };

});

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
    dispatch(signin(email, password));

  }
  return <div className = "form">
    <div 
    className = "page-header"
    style = {{
      backgroundImage: "url(" + require("../../assets/img/back.jpg") + ")",
    }} 
    >
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
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
          <button type="submit" className="button primary"> Log In </button>
        </li>
        <li>
          New to eStore?
        </li>
        <li>
          <Link to="/register" className="button secondary text-center" >Create your eStore account</Link>
        </li>
      </ul>
    </form>
    </div>
  </div>


}
export default SigninScreen;
