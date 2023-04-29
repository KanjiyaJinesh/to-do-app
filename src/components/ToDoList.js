import React, {useCallback, useContext, useState} from "react";
import styles from "./List.module.css";
import ListTemplate from "./listTemplate.js";
import Modal, {useModal} from "./modal/Modal.js";
import Form from "./form/Form.js";
import {functionContext} from "../Main.js";

const UPDATE_BUTTON_NAME = "Start";
const INIT_TASK = {
  task: "",
  status: "pending",
  priority: "high",
};

const ToDoList = ({list}) => {
  const allFunctions = useContext(functionContext);
  const [isVisible, toggleModal] = useModal();
  const [formTask, setFormTask] = useState(() => INIT_TASK);

  console.log("ToDoList");

  const submitHandler  = useCallback((event) => {
    console.log(event.target.due_date.value);
    event.preventDefault();
    allFunctions.addToList(formTask);
    setFormTask(INIT_TASK);
    toggleModal();
    
  },[formTask, allFunctions, toggleModal]);

  const cancelHandler = useCallback((event) => {
    event.preventDefault();
    setFormTask(INIT_TASK);
    toggleModal();
  },[toggleModal]);
  
  return (
    <div className={styles.list_container}>
      { isVisible && 
        <Modal>
          <Form submitHandler={submitHandler} cancelHandler={cancelHandler} formTask={formTask} setFormTask={setFormTask}></Form>
        </Modal>
      }
      <div className={styles.list_header}>
        <div className={styles.filler}></div>
        <h2>Pending List</h2>
        <div className={styles.filler}>
          <button className={styles.add_task_button} onClick={toggleModal}>
            Add +
          </button>
        </div>
      </div>
      
      <ListTemplate
        list={list}
        updateButtonName={UPDATE_BUTTON_NAME}
      />
    </div>
  )
};

export default React.memo(ToDoList);
