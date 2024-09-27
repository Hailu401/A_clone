import React from 'react'
import Layout from '../../Components/Layout/Layout'
import './Login.css'
import {Link} from 'react-router-dom'

function SignIn() {
  return (
    <Layout>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
        <div className="login_container">
          <h1>Sign in</h1>
          <form>
            <h5>Email</h5>
            <input
              type="text"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="Login_signInButton"
              // onClick={signIn}
            >
              Sign in
            </button>
          </form>
          <p>
            By signing-in you agree to the Amazon fake Clone condition of use
            sale. please, see your privacy notice, our Cookies notice and our
            interest-based ads notice.
          </p>
          <button className="Login_registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
