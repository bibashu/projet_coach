import { InputUser } from "../../components/InputUser/InputUser";
import s from "./style.module.css";
import { Google, TwitterX, Meta, Dash } from "react-bootstrap-icons";
import { auth, provider } from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import video from "../../assets/vid3.mp4";
import google from "../../assets/imgs/google.svg"
export function Register(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Swal.fire({
        title: "Inscription réussie!",
        text: "Redirection vers la page de connexion",
        icon: "success",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${email} existe déjà`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        Swal.fire({
          title: "Inscription réussie!",
          text: "Redirection vers la page de connexion",
          icon: "success",
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Google sign-in failed. Please try again.",
        });
      });
  };

  return (
    <div className="flex  w-full justify-center h-screen  align-items-center px-0 md:px-36 shadow-lg" style={{backgroundColor: "#0B162C"}}>
      <div className=" flex flex-col-reverse md:flex-row h-full md:h-5/6  rounded-3xl bg-white">
        <div className="flex justify-center flex-col w-full md-1/2 text-center px-5">
          <h1 className="text-7xl font-bold text-black">Hi there!</h1>
          <h6 className="text-md mb-4">Welcome to Haze community Dashboard</h6>
          <button className=" flex border-2 border-gray-400 w--full justify-center p-2 justify-items-center">
            <img src={google} alt="" className="h-6 w-6" />
            <p className="text-sm ml-2" >Log with Gmail</p>
          </button>
          <p className="my-3"> Or</p>
          <form action="">
          <div class="relative">
              <input
                type="email"
                required
                id="email"
                class="block px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Email "
              />
              <label
                for="email"
                class="absolute text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
              Email
              </label>
            </div>
            <div class="relative mt-3">
              <input
                type="password"
                id="password"
                class="block px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute text-gray-500 text-sm duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>
            <Button className="bg-black w-full text-white rounded-2xl mt-5 shadow py-2">Register</Button>
            <p className="text-sm">Vous avez pas de compte <a href="/login">Sign up</a> </p>
          </form>
        </div>
        <div className="shadow-sm w-1-2 md:w-full ">
          <video autoPlay muted loop className="rounded-3xl w-100 h-full object-fill object-right-top shadow-xl" >
            <source className="rounded-xl " src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}
