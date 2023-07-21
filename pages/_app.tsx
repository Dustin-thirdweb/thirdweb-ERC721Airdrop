import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Ethereum } from "@thirdweb-dev/chains"
import { Navbar } from "../components/Navbar/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={Ethereum}
      clientId="6f987a42ce445cedc9cd917e21954cb6"
    >
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
