import { Fragment } from "react";
import Container from "./container";
import MainNavigation from "./header/main-navigation";
import Footer from "./footer/footer";

function Layout(props) {
  return (
    <Fragment>
      <Container>
        <MainNavigation />
      </Container>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
