import Link from "next/link";
import FooterItem from "./footer-item";
import { FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import classes from "./footer.module.css";

function Footer() {
  const myAccount = ["Sign in", "Register", "Order Status"];

  const help = ["Shipping", "Returns", "Sizing"];

  const about = ["Our story", "Media", "Sustainability"];

  const legalStuff = ["Terms of Use", "Terms of Sale", "Privacy policy"];

  return (
    <section className={classes.footer}>
      <div className={classes.subDivisions}>
        <FooterItem title="MY ACCOUNT" links={myAccount} />
        <FooterItem title="HELP" links={help} />
        <FooterItem title="ABOUT" links={about} />
        <FooterItem title="LEGAL STUFF" links={legalStuff} />

        <div className={classes.socialMedia}>
          <p className={classes.socialTitle}>FOLLOW ALL-STARS</p>
          <ul className={classes.socialLinks}>
            <li className={classes.socialLink}>
              <Link href="/">
                <a>
                  <FiFacebook size={20} />
                </a>
              </Link>
            </li>
            <li className={classes.socialLink}>
              <Link href="/">
                <a>
                  <FiInstagram size={20} />
                </a>
              </Link>
            </li>
            <li className={classes.socialLink}>
              <Link href="/">
                <a>
                  <FiTwitter size={20} />
                </a>
              </Link>
            </li>
            <li className={classes.socialLink}>
              <Link href="/">
                <a>
                  <FiLinkedin size={20} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={classes.copyrights}>
        © 2020 ALL-STARS Inc. All Rights Reserved
      </p>
    </section>
  );
}

export default Footer;
