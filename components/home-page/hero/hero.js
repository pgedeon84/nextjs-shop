import classes from "./hero.module.css";
import Button from "../../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.images}>
        <div className={classes.imgRight}>
          <Image
            src="/images/converse2.png"
            alt="An image showing converse shoes"
            width={280}
            height={215}
            layout="responsive"
          />
        </div>
        <div className={classes.imgLeft}>
          <Image
            src="/images/converse.png"
            alt="An image showing converse shoes"
            width={280}
            height={215}
            layout="responsive"
          />
        </div>
        <div className={classes.logo}>
          <Image
            src="/images/converse-logo.png"
            alt="Converse Logo"
            width={300}
            height={280}
            layout="responsive"
          />
        </div>
      </div>
      <div className={classes.content}>
        <h1>HARDWOOD CLASSICS</h1>
        <p>Introducing the All-New two-toned Converse.</p>
        <Button type="dark" label="SHOP" />
      </div>
    </section>
  );
}

export default Hero;
