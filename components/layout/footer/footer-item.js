import Link from "next/link";
import classes from "./footer-item.module.css";

function FooterItem(props) {
  const { title, links } = props;
  return (
    <div className={classes.item}>
      <p className={classes.title}>{title}</p>
      <ul className={classes.links}>
        {links.map((link) => (
          <li className={classes.link} key={link}>
            <Link href="/">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterItem;
