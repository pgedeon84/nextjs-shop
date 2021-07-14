import Link from "next/link";
import Container from "../../layout/container";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import classes from "./category.module.css";

function Category(props) {
  return (
    <Container>
      <Link href={props.linkPath}>
        <a>
          <div className={classes.category}>
            <h1>{props.category}</h1>
            <div className={classes.image}>
              <Image
                src={props.src}
                alt={props.alt}
                // width={335}
                // height={446}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p>Shop</p>
          </div>
        </a>
      </Link>
    </Container>
  );
}

export default Category;
