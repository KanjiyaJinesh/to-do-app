import {memo, useState, useCallback, useContext} from "react";
import styles from "./List.module.css";
import Modal, {useModal} from "./modal/Modal.js";
import Form from "./form/Form.js";
import {functionContext} from "../Main.js";

const ListItem = ({listItem, updateButtonName}) => {
  const allFunctions = useContext(functionContext);
  const [isVisible, toggleModal] = useModal();
  const [formTask, setFormTask] = useState(() => { return {...listItem} });

  console.log("ListItem - ", listItem.task);

  const submitHandler  = useCallback((event, id, status) => {
    event.preventDefault();
    allFunctions.editList(formTask, id, status);
    toggleModal();
  },[formTask, toggleModal, allFunctions]);

  const cancelHandler = useCallback((event) => {
    event.preventDefault();
    setFormTask({...listItem});
    toggleModal();
  },[toggleModal, listItem]);

  return (
    <li key={listItem.id} className={styles.listItem_container}>
      { isVisible && 
        <Modal>
          <Form submitHandler={(e)=>{submitHandler(e,listItem.id, listItem.status)}} cancelHandler={cancelHandler} formTask={formTask} setFormTask={setFormTask}></Form>
        </Modal>
      }
      <div className={styles.listItem}>
        <div className={styles.listItem_p}>
          <p className={styles[listItem.priority]}>{listItem.task}</p>
        </div>
        <div className={styles.listItem_span}>
          {(listItem.priority === "high") &&
             <span className={`material-symbols-outlined ${styles[listItem.priority]}`} >keyboard_double_arrow_up</span>
          }
          {(listItem.priority === "medium") &&
             <span className={`${styles[listItem.priority]}`}>=</span>
          }
          {(listItem.priority === "low") &&
             <span className={`material-symbols-outlined ${styles[listItem.priority]}`}>keyboard_double_arrow_down</span>
          }
        </div>
      </div>
     
      {/* <em>{listItem.priority}</em> */}
      <div className={styles.actions}>
        {
          updateButtonName && <button 
            className={`${styles.button} ${styles.forward_button}`}
            onClick={() => allFunctions.updateList(listItem.id, listItem.status)}
          >
            {updateButtonName}
          </button>
        }

        <div className={styles.filler}></div>

        <span 
          className={`material-symbols-sharp ${styles.edit_button}`}
          onClick = {toggleModal}
        >
          edit
        </span>

        <span 
          className={`material-symbols-outlined ${styles.remove_button}`}
          onClick={() => allFunctions.removeFromList(listItem.id, listItem.status)}
        >
          delete
        </span>

      </div>
    </li>
  );
};

export default memo(ListItem);
