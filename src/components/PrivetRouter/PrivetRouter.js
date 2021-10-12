import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRouter = ({children , ...rest}) => {
  const {user} = useAuth();
  console.log(user);
  return (
        
    
    <Route 
     {...rest}
     render={({location})=>
      user.displayName? (children) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location}
          }}
        
        >

        </Redirect>
      )
    }
    >

    </Route>



  )
    }
export default PrivetRouter;