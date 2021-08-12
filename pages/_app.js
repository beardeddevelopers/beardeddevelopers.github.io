import { Helmet } from "react-helmet";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Bearded Developers"
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          { property: "og:title", content: "Bearded Developers" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
