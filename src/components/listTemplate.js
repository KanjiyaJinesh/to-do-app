import {memo} from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem.js";

const ListTemplate = ({list, updateButtonName}) => {

  console.log("listTemplate");
  return (
    <div className={styles.list_wrapper}>
      <ul className={styles.list}>
        {
          list.map((listItem) => {
            return (
              <ListItem 
                key={listItem.id} 
                listItem={listItem} 
                updateButtonName={updateButtonName}/>
            );
          })
        }
      </ul>
    </div>
  )
};

export default memo(ListTemplate);