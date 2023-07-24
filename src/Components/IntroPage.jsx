import React from "react";
import InputBlock from "./InputBlock";
import style from "../CSS/IntroPage.module.css"
import { motion } from "framer-motion";

function IntroPage(props) {
  return (
      <motion.div className={style.IntroPage} initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale : 0 }}
        transition={{ type: "Tween"}}>
        <InputBlock setPage={props.setPage} />
      </motion.div>
  );
}

export default IntroPage;
