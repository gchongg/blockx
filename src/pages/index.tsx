import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Hero,
  ValueProposition,
  HowItWorks,
  CallToAction
} from "../components/landing";

const Home: NextPage = () => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>BlockX | Decentralized Data Marketplace</title>
        <meta name="description" content="A secure blockchain-powered platform for buying and selling data" />
      </Head>

      <Hero router={router} />
      <ValueProposition />
      <HowItWorks />
      <CallToAction router={router} />
    </>
  );
};

export default Home;
