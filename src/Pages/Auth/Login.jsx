import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"


function Login() {
    const [ email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
//function foor sign route

    const signIn = (e) => {
        e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then(
        // console.log(userInfo);
        navigate('/')
      )
      .catch((error) => console.log(error.message));

    }

     const register = (e) => {
       e.preventDefault();
      // createUserWithEmailAndPassword(auth,email,password)
      // .then( (userInfo)=>{
      //   console.log(userInfo);
      // })

      //another way

      createUserWithEmailAndPassword(auth, email, password)
        .then(
          navigate("/")
        )
        .catch((error) => console.log(error.message));
      
    }
  return (
    <div className='login'>
      <Link to = "/">
      <img
        className="login_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt=""
      />
      </Link>
      <div className='login_container'>
        <h1>Sign in</h1>
        <form >
            <h5>Email</h5>
            <input 
            type="text" 
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            
            />
            <h5>Password</h5>
            <input
             type="password"
             value={password} 
             onChange={ (e) => setPassword(e.target.value)}
             
            />
            <button 
            type='submit'
            className='Login_signInButton'
            onClick={signIn}
            >
                Sign in
            </button>
        </form>
        <p>
            By signing-in you agree to the Amazon fake Clone condition of use
            sale. please, see your privacy notice, our Cookies notice and our
            interest-based ads notice.
        </p>
        <button onClick={register} className = 'Login_registerButton'>
            
            Create your Amazon Account

        </button>
      </div>
    </div>
  );
}

export default Login;
