import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home-page/hero/hero";
import Categories from "../components/home-page/categories/categories";
import Products from "../components/home-page/products/products";
import MailingList from "../components/home-page/mailing-list/mailing-list";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>My E-Commerce Store</title>
        <meta name="description" content="My Personal E-Commerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Categories />
      <Products title="New Arrivals" />
      <Products title="Top Kicks" />
      <MailingList />
    </Fragment>
  );
}

export default HomePage;
