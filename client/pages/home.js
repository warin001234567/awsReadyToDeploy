import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HomeContent from "../components/HomeContent";

const Home = (props) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>.Ticket Cineplex</title>
        <link rel="icon" type="image/png" href="resource/icon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand|Roboto+Condensed"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Mitr"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Kanit"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </Head>
      <Layout>
        <HomeContent></HomeContent>
      </Layout>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: "Roboto Condensed", sans-serif;
        }
        body,
        html {
          background: rgb(0, 0, 0);
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
