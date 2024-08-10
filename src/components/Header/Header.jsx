import { PersonPlusFill } from "react-bootstrap-icons";
import s from "./Header.module.css";
const Header = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <nav className="bg-transparent border-gray-200 p-2 sm:ml-64">
      <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
        <h1 className="text-xl font-bold">Skills</h1>
        <PersonPlusFill className="text-xl font-bold" />
      </div>
    </nav>
  );
};

export default Header;
