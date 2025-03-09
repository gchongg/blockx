import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Head } from "./Head";

interface Props {
  children: ReactNode;
}

export function LandingLayout(props: Props) {
  return (
    <div className="layout-root">
      <Head />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
