import { InputUser } from '../../components/InputUser/InputUser';
import s from './style.module.css'
import { Google, TwitterX, Meta } from "react-bootstrap-icons";
import { auth, provider } from "../../Firebase"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { Button } from '../../components/Button/Button';

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export  function Register(props) {
  const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // ale
      
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        
        Swal.fire({
          title: "Incription reussi!",
          text: "Redirection vers la page login",
          icon: "success"
        });
        console.log(Swal);
        setTimeout(() => {
          
          navigate("/login")
        }, 2000);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${email} Existe deja`,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    };
    function handleGoogle(){
      signInWithPopup(auth, provider).then((data) => {
        setEmail(data.user.email)
        setPassword(data.user.password)
      })
    }
  
  return (
    <div className={`container   ${s.container}`}>
      <div className={`row ${s.row}`}>
        <div
          className={`col-md-6 d-flex flex-column  justify-content-center align-items-center ${s.gauche}`}
        >
          <h1>Hi</h1>
          <h2 className="mt-0 mt-md-5 text-center">Here you can add your image....</h2>
        </div>
        <div className="row col-md-6 gy-4 mb-5">
          <div className="text-center">
            <h4 className="fw-bold">Hello again</h4>
            <p className={`${s.text}`}>Welcome back you”ve been missed!</p>
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
               <InputUser placeholder="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
              
               <InputUser  placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
               </div>
              <p
                className={`text-end`}
                style={{ color: "#FE6B68", fontWeight: "lighter" }}
              >
                Recovery Password
              </p>
              <Button>Register</Button>

              <p className={`text-center mt-3 ${s.soustitre}`}>
                Or continue with
              </p>
              <div className="d-flex justify-content-evenly gap-4 mt-3 fs-2">
                <Google className={` ${s.iconGoogle}`} onClick={handleGoogle} />
                <TwitterX className={` ${s.iconTwiter}`} />
                <Meta className={` ${s.iconMeta}`} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
