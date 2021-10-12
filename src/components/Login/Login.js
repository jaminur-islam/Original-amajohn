import React from 'react';
import { Link , useLocation , useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const location = useLocation()
   const locationis =  location?.state?.from || '/shop';
   const history = useHistory();
  const {handleGoogleSign , user , handleGithub} = useFirebase();
  if(user?.displayName) {
    history.push(locationis)}

   const googleSign = () =>{
    handleGoogleSign()
    .then(result => {
      history.push(locationis)
    })
   }

  return (
   
    <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', border: '2px solid green' , padding: '10px' , textAlign: 'center'}} >
      <div>
        <h1> login form </h1>
        <form>
          <input type="email" placeholder='your email' />
          <br />
          <input type="password" placeholder='your password' />
          <br />
          <button> Submit </button>
        </form>
        <p> new users ? <Link to='/register'> register </Link></p>
        <div>================================</div>
        <button onClick={googleSign}> sing in with google </button>
        <button onClick={handleGithub}> sing in with github  </button>

      </div>
    </div>
  );
};

export default Login;