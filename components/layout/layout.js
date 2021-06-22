import { Fragment } from "react";
import Container from "./container";
import MainNavigation from "./main-navigation";

function Layout(props) {
    return (
        <Fragment>
            <Container>
                <MainNavigation />
            </Container>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;