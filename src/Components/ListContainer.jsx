import React, { useContext} from "react";
import ListContext from "../Context/ListContext";
import styles from "../CSS/ListContainer.module.css"

function ListContainer(props) {

  const renderListContainer = (userList) => {
    return <div className={styles.ListContainer}>
    <div className={styles.ScrollWrapper}>
      {userList.map((item, index) => {
        return (
          <div id={index} key={index} className={styles.List}>
            <div className={styles.ListAmount}> {item.amount} </div>
            <div className={styles.ListCategory}> {item.category} </div>
            <div className={styles.BtnWrapper}>
              <button onClick={() => {
                return deleteItem(index);
              }}> ❌ </button>
            </div>
          </div>
        );
      })}
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
  );
}

export default ListContainer;
