import React from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/styles.css";

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

const beardScripts = () => {
  return `
    document.addEventListener('DOMContentLoaded', function() {
      var links = document.getElementsByClassName('beard');
      for (var i=0; i<links.length; i++) {
        var link = links[i];
        link.addEventListener('click', function(e) {
          document.getElementById('lightA').innerHTML='<img border=0 src="' + e.currentTarget.dataset.beard + '" />';
          document.getElementById('light').style.display='block';
          document.getElementById('fade').style.display='block';
        })
      };
    });

    document.addEventListener('DOMContentLoaded', function() {
      var link = document.getElementById('lightA');
      link.addEventListener('click', function() {
        document.getElementById('light').style.display = "none";
        document.getElementById('lightA').innerHTML = "";
        document.getElementById('fade').style.display = "none";
      })
    });`;
};

const Layout = (props) => {
  return (
    <>
      <Helmet>
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

        <style>{styles}</style>
        <script>{beardScripts()}</script>

        <body style={{ width: "900px", margin: "auto 0" }} />
      </Helmet>

      {props.children}

      <div id="light" className="white_content">
        <a id="lightA" title="Click here to revert to the original state." href="#" onClick="hideBeard()"></a>
      </div>
      <div id="fade" className="black_overlay" title="Click on the image to revert to the original state."></div>
      <div className="siteInfo">
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        <br />
        <small>The &gt; were intentional just to pay homage to all the low budget websites out there.</small>
        <p>
          Qualifications: (Thanks david!)
          <ul>
            <li>White Shirt</li>
            <li>Fucked up hair</li>
            <li>Listless expression</li>
            <li>A beard (of course)</li>
          </ul>
        </p>
        <p>
          Submit your photo entry to{" "}
          <script>
            s='%3C%73%63%72%69%70%74%3E%76%61%72%20%74%2C%73%3D%27%27%3B%74%3D%22%36%34%36%46%36%33%37%35%36%44%36%35%36%45%37%34%32%45%37%37%37%32%36%39%37%34%36%35%32%38%32%32%33%43%36%31%32%30%32%30%36%38%37%32%36%35%36%36%33%44%35%43%32%32%36%44%36%31%36%39%36%43%37%34%36%46%33%41%36%32%36%35%36%31%37%32%36%34%36%35%36%34%36%34%36%35%37%36%36%35%36%43%36%46%37%30%36%35%37%32%37%33%34%30%36%37%36%44%36%31%36%39%36%43%32%45%36%33%36%46%36%44%35%43%32%32%32%30%32%30%33%45%36%32%36%35%36%31%37%32%36%34%36%35%36%34%36%34%36%35%37%36%36%35%36%43%36%46%37%30%36%35%37%32%37%33%34%30%36%37%36%44%36%31%36%39%36%43%32%45%36%33%36%46%36%44%33%43%32%46%36%31%33%45%32%32%32%39%33%42%22%3B%66%6F%72%28%69%3D%30%3B%69%3C%74%2E%6C%65%6E%67%74%68%3B%69%2B%3D%32%29%7B%73%20%2B%3D%20%75%6E%65%73%63%61%70%65%28%27%25%27%2B%74%2E%73%75%62%73%74%72%28%69%2C%32%29%29%7D%3B%65%76%61%6C%28%73%29%3B%3C%2F%73%63%72%69%70%74%3E';document.write(unescape(s));
          </script>
          <noscript>
            <a href="&#109&#97&#105&#108&#116&#111&#58&#98&#101&#97&#114&#100&#101&#100&#100&#101&#118&#101&#108&#111&#112&#101&#114&#115&#64&#103&#109&#97&#105&#108&#46&#99&#111&#109">
              <b style={{ color: "black", backgroundColor: "#ffff66 " }}>
                &#98&#101&#97&#114&#100&#101&#100&#100&#101&#118&#101&#108&#111&#112&#101&#114&#115
              </b>
              &#64&#103&#109&#97&#105&#108&#46&#99&#111&#109
            </a>
          </noscript>
        </p>
        <small>
          <a href="https://github.com/beardeddevelopers">See source code</a>
        </small>
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-1488198-3" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-1488198-3', { page_path: window.location.pathname });
            `,
        }}
      />
    </>
  );
};

export default Layout;
