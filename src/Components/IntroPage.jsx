import React from "react";
import InputBlock from "./InputBlock";
import style from "../CSS/IntroPage.module.css"

function IntroPage(props) {
  return (
    <div className={style.IntroPage}>
      <InputBlock setPage={props.setPage} />
    </div>
  );
}

export default IntroPage;
