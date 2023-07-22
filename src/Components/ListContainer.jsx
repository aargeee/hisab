import React, { useContext } from "react";
import ListContext from "../Context/ListContext";
import styles from "../CSS/ListContainer.module.css"
import { AnimatePresence, motion } from "framer-motion";

function ListContainer(props) {

  const renderListContainer = (userList) => {
    return <div className={styles.ListContainer}>
      <div className={styles.ScrollWrapper}>
      <AnimatePresence>
        {userList.map((item, index) => {
          return (
            <motion.div id={index} key={index} className={styles.List} initial={{ height: 0 }} animate={{ height: "fit-content" }} exit={{ height: 0 }}>
              <div className={styles.ListAmount}> {item.amount} </div>
              <div className={styles.ListCategory}> {item.category} </div>
              <div className={styles.BtnWrapper}>
                <button onClick={() => {
                  return deleteItem(index);
                }}> ❌ </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
      </div>
    </div>
  }

  const context = useContext(ListContext);
  function deleteItem(id) {
    if (props.user === "1") {
      context.setUser1List(prev => {
        return prev.filter((item, index) => {
          return index !== id;
        })
      })
    }

    else {
      context.setUser2List(prev => {
        return prev.filter((item, index) => {
          return index !== id;
        })
      })
    }
  }

  return props.user === "1" ? (
      renderListContainer(context.user1List)
    ) : (
      renderListContainer(context.user2List)
    )
}

export default ListContainer;
