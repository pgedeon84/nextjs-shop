import Hamburger from "../ui/hamburger";
import Logo from "./logo";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi"

import classes from "./main-navigation.module.css";

function MainNavigation() {
    return(
        <header className={classes.header}>
            <Hamburger/>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <FiSearch size={30}/>
                            </a>
                        </Link>
                    
                    </li>
                    <li>
                        <Link href="/">
                            <a>
                                <FiShoppingBag size={30}/>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;