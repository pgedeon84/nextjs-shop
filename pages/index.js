import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>My E-Commerce Store</title>
        <meta name="description" content="My Personal E-Commerce Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Fragment>
  );
}
