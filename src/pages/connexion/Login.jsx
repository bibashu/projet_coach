import { Button } from "../../components/Button/Button";
import { InputUser } from "../../components/InputUser/InputUser";
import s from "./style.module.css";
import { Google, TwitterX, Meta } from "react-bootstrap-icons";
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../../Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Connexion réussie!",
        // text: "Nous allons vous rediriger vers la page d'accueil",
        icon: "success"
      });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${email} n'existe pas`,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setEmail(user.email);
        Swal.fire({
          title: "Connexion réussie!",
          icon: "success"
        });
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Google sign-in failed. Please try again.",
        });
      });
  };

  return (
    <div className={`container ${s.container}`}>
      <div className={`row ${s.row}`}>
        <div className={`col-md-6 d-flex flex-column justify-content-center align-items-center ${s.gauche}`}>
          <h1>Hi</h1>
          <h2 className="mt-0 mt-md-5 text-center">Here you can add your image....</h2>
        </div>
        <div className="row col-md-6 gy-4 mb-5">
          <div className="text-center">
            <h4 className="fw-bold">Hello again</h4>
            <p className={`${s.text}`}>Welcome back you’ve been missed!</p>
            <form onSubmit={handleSubmit}>
              <InputUser placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <InputUser placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="text-end" style={{ color: "#FE6B68", fontWeight: "lighter" }}>
                Recovery Password
              </p>
              <Button>Login</Button>
              <p className={`text-center mt-3 ${s.soustitre}`}>
                Or continue with
              </p>
              <div className="d-flex justify-content-evenly gap-4 mt-3 fs-2">
                <Google onClick={handleGoogle} className={s.iconGoogle} />
                <TwitterX className={s.iconTwiter} />
                <Meta className={s.iconMeta} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
