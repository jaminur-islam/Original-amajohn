import authenticationInit from "../Firebase/FirebaseAuthentication";
import { getAuth, GithubAuthProvider, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
authenticationInit();



const useFirebase = () =>{

  // user state 
  const [user , setUser] = useState({});

  // auth
  const auth = getAuth();

  // google provider
  const googleProvider = new GoogleAuthProvider();

  // github provider
  const githubProvider = new GithubAuthProvider()


  // handle google sing in 
  const handleGoogleSign = () =>{
  return  signInWithPopup(auth , googleProvider)
    
  }

  // handle github sign in
  const handleGithub = () =>{
    signInWithPopup(auth , githubProvider)
    .then(result =>{
      console.log(result);
    })
  }

  // logOut 
  const logOut = () =>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
  }

  // current user take update rakhar jonno eita beboahar kora hoy 
  useEffect(()=>{
  const unsubsrib = onAuthStateChanged(auth , (user) =>{
      if(user){
        setUser(user);
      }
    })
    return unsubsrib;
  },[])

  return {handleGoogleSign , user , logOut , handleGithub};
}

export default useFirebase;