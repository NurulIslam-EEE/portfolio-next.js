import { useRouter } from "next/router";
import Transition from "../components/Transition";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";
import Navigation from "../components/Navigation";
import Nav2 from "../components/Nav2";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // bg-regular
  return (
    <div className="bg-regular relative">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
        </motion.div>
        <Nav2 />
        <Nav />
        <Component {...pageProps} />{" "}
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
