import React from "react";
import classes from "./Login.module.css";

const Login = ({ history }) => {
  const [userName, setUserName] = React.useState("");
  const login = () => {
    history.push({
      pathname: "/calendar",
      state: userName
    });
  };
  return (
    <>
      <h3>Pick a username or choose your existing username to get started</h3>
      <div className={classes.LoginContainer}>
        <div className={classes.InputContainer}>
          <label htmlFor="login"> Login</label>
          <input
            value={userName}
            onChange={e => setUserName(e.target.value)}
            id="login"
            placeholder="username"
          />
          <button onClick={login}>Login!</button>
        </div>
      </div>
    </>
  );
};

export default Login;
