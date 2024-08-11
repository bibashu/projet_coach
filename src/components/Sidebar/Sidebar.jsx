import React, { useEffect } from "react";
import {
  ArrowBarLeft,
  BarChartFill,
  CardChecklist,
  GearFill,
  HouseDoorFill,
  PersonFill,
  QuestionCircle,
  WalletFill,
} from "react-bootstrap-icons";
import logo from '../../assets/imgs/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.webp';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user); // Ajoutez ceci pour déboguer
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [navigate]);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert('We could not log out');
    }
  };

  const userName = localStorage.getItem("display");
  const userEmail = localStorage.getItem("email");

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <a href="/home" className="flex items-center ps-2.5 mb-5">
            <img
              className="w-10 h-10 p-0 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={logo}
              alt="Bordered avatar"
            />
            <span className="self-center text-xl pl-2 font-semibold whitespace-nowrap text-black">
            {userEmail}
            </span>
          </a>
          <hr className="w-48 h-1 mx-auto my-4 bg-orange-500 border-0 rounded md:my-10" />
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <HouseDoorFill className="w-16 h-6" />
                <span className="ms-0">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-lg text-black hover:bg-orange-500 group"
              >
                <PersonFill className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <WalletFill className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Wallet</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <BarChartFill className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <CardChecklist className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Tasks</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <GearFill className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <QuestionCircle className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Help</span>
              </a>
            </li>
            <li>
              <button
                onClick={logOut}
                className="flex items-center p-2 text-black rounded-lg hover:bg-orange-500 group"
              >
                <ArrowBarLeft className="w-16 h-6" />
                <span className="flex-1 ms-0 whitespace-nowrap">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
