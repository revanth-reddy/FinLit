import Styles from "./Button.module.css";

function Button({ text, onclickfun }) {
  return <button className={Styles.btn} style={{cursor: 'pointer'}} onClick={()=>onclickfun()}>{text}</button>;
}

export default Button;
