import React from "react";
import Head from "next/head";
import Link from "next/link";

const dateTimeOfHour = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);
  return date.toISOString();
};

const defaultSiteName = "Bearded Developers";
const defaultDescription = "The Developers You Love To Never See";
const defaultTitle = defaultSiteName + " - " + defaultDescription;
const defaultImage = "/images/bearded.jpg";
const defaultUpdatedTime = dateTimeOfHour();

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:site_name" content={defaultSiteName} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:url" content={process.env.appUrl} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:locale" content="default" />
        <meta property="og:updated_time" content={defaultUpdatedTime} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultImage} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2.0" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2.0" />
        <link rel="manifest" href="/site.webmanifest?v=2.0" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=2.0" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=2.0" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {props.children}
    </>
  );
};

export default Layout;
