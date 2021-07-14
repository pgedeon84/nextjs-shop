import classes from "./button.module.css";

function Button(props) {
  const { type, label } = props;

  let btnType = "";

  if (type === "dark") {
    btnType = classes.dark;
  }

  if (type === "light") {
    btnType = classes.light;
  }

  const cssClasses = `${classes.btn} ${btnType}`;

  return <button className={cssClasses}>{label}</button>;
}

export default Button;
