import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { LandingLayout } from "./LandingLayout";
import { DefaultLayout } from "./DefaultLayout";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const router = useRouter();
  
  // Use LandingLayout for the homepage
  if (router.pathname === "/") {
    return <LandingLayout>{children}</LandingLayout>;
  }
  
  // Use DefaultLayout for all other pages
  return <DefaultLayout>{children}</DefaultLayout>;
}
