import s from "./Button.module.css";

export function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} type="submit" className={className}>
      {children}
    </button>
  );
}
