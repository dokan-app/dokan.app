import React from "react";
import { AppProps } from "next/app";
// import "../styles/tailwind.css";
// import "../styles/app.scss";

const TailWindNextRoot = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default TailWindNextRoot;
