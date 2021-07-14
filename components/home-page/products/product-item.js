import Link from "next/link";
import Image from "next/image";
import classes from "./product-item.module.css";

function ProductItem(props) {
  return (
    <li className={classes.product}>
      <Link href={props.linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={props.src}
              alt={props.alt}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <p className={classes.title}>{props.name}</p>
            <p className={classes.gender}>{props.gender}</p>
            <p className={classes.price}>{props.price}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default ProductItem;
