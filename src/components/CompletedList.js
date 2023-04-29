import React from "react";
import styles from "./List.module.css";
import ListTemplate from "./listTemplate.js";


const CompletedList = ({list}) => {

  console.log("CompletedList");
  return (
    <div className={styles.list_container}>
      <div className={styles.list_header}>
        <h2>Completed List</h2>
      </div>
      <ListTemplate
        list={list}
      />
    </div>
  )
};

export default React.memo(CompletedList);
