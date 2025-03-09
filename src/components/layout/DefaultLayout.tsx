import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Head } from "./Head";

interface Props {
  children: ReactNode;
}

export function DefaultLayout(props: Props) {
  return (
    <div className="layout-root">
      <Head />
      <Header />
      {/* Use simple div instead of Container */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1rem" }}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
