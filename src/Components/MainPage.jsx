import React from "react";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import HomeIcon from '@mui/icons-material/Home';

import styles from "../CSS/MainPage.module.css"
import { AnimatePresence, motion } from "framer-motion";
import { ListState } from "../Context/ListContext";

function MainPage(props) {
  return (

      <motion.div className={styles.MainPage} initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale : 0 }}
      transition={{ type: "Tween"}}>
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
          <ListState>
              <OutputSection> </OutputSection>
              <InputSection> </InputSection>
          </ListState>
        </div>

      </motion.div>
  );
}

export default MainPage;
