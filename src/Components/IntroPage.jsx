import React from "react";
import InputBlock from "./InputBlock";
import style from "../CSS/IntroPage.module.css"
import { AnimatePresence, motion } from "framer-motion";

function IntroPage(props) {
  return (
    <AnimatePresence>
      <motion.div className={style.IntroPage} initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <InputBlock setPage={props.setPage} />
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroPage;
