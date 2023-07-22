import React from "react";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import HomeIcon from '@mui/icons-material/Home';

import styles from "../CSS/MainPage.module.css"
import { AnimatePresence, motion } from "framer-motion";

function MainPage(props) {
  return (
    <AnimatePresence>
      <motion.div className={styles.MainPage} initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className={styles.Header}>
          <div className={styles.HeaderBtn}>
            <button onClick={() => (props.setPage("Intro"))}> <HomeIcon /> </button>
          </div>

          <div className={styles.HeaderText}>
            Hisaab
          </div>
          <div className="dummy"></div>
        </div>

        <div className={styles.MainSection}>
          <OutputSection> </OutputSection>
          <InputSection> </InputSection>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}

export default MainPage;
