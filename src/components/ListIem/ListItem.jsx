import s from "./ListItem.module.css";

export default function ListItem({ children }) {
  return (
    <li className="">
      <a href="#">{children}</a>
    </li>
  );
}
