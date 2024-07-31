import s from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} type="submit" className={`mt-5 ${s.btn}`}>
      {children}
    </button>
  );
}
