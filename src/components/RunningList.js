import React from "react";
import styles from "./List.module.css";
import ListTemplate from "./listTemplate.js";

const UPDATE_BUTTON_NAME = "Done";

const RunningList = ({list}) => {

  console.log("RunningList");
  return (
    <div className={styles.list_container}>
      <div className={styles.list_header}>
        <h2>Running List</h2>
      </div>
      <ListTemplate
        list={list}
        updateButtonName={UPDATE_BUTTON_NAME}
      />
    </div>
  )
};

export default React.memo(RunningList);
