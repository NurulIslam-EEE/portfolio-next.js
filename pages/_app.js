import { useRouter } from "next/router";
import Transition from "../components/Transition";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="bg-regular">
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
        </motion.div>
        <Nav />
        <Component {...pageProps} />{" "}
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
