import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";



const app = initializeApp(firebaseConfig);

const Login = () => {
  const [loggedinUser,setLoggedinUser] = useContext(UserContext);

  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
//Google Login
const handelLogin = ()=>{
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => { const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;const user = result.user;
      console.log(user);
      const newUser = {...loggedinUser}
          newUser.email = user.email;
          newUser.name = user.displayName;
          setLoggedinUser(newUser);
          console.log(location);
          if(location){
              navigate(location.state.from.pathname)
          }
    }).catch((error) => {const errorCode = error.code;
      const errorMessage = error.message; const email = error.customData.email;
     const credential = GoogleAuthProvider.credentialFromError(error);
    });
}


  return (
    <div className="bg-color" style={{height:"100vh"}}>
      <div className="container" style={{width: "65%" }}>
        <div className="d-grid gap-2">
          <Button onClick={handelLogin} variant="secondary align-middle" style={{marginTop:'45%'}} size="lg">
          <FontAwesomeIcon className="fs-3s px-3" icon={faGoogle} style={{color:"gold"}} />login with google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
