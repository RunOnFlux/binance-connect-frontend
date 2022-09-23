import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const router = useRouter();

  // http://localhost:3000/?merchantid=id

  return (
    <ChakraProvider>
      <ToastContainer autoClose={10000} hideProgressBar={false} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
