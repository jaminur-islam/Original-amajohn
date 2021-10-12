import React from 'react';
import { Link } from 'react-router-dom';

const Ragister = () => {
  return (

          <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', border: '2px solid green' , padding: '10px' , textAlign: 'center'}} >
      <div>
        <h1> ragister form </h1>
        <form>
          <input type="text" placeholder='your name' />
          <br />
          <input type="email" placeholder='your email' />
          <br />
          <input type="password" placeholder='your password' />
          <br />
          <button> Submit </button>
        </form>
        <p> have account  ? <Link to='/login'>Login </Link></p>
        <div>================================</div>
        <button> sing in with google </button>
        <button> sing in with github  </button>

      </div>
    </div>
    
  );
};

export default Ragister;