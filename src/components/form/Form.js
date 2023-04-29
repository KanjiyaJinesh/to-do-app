import React from "react";
import styles from "./form.module.css";
import buttonStyles from "../List.module.css";

const Form = ({submitHandler, cancelHandler, formTask, setFormTask}) => {

  const handleTaskInputChange = (event) => {
    setFormTask({...formTask, task: event.target.value});
  }

  const handlePriorityChange = (event) => {
    setFormTask({...formTask, priority: event.target.value});
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input_field}>
        <label htmlFor="task_input">Task :</label>
        <input type="text" id="task_input" name="task_input" value={formTask.task} onChange={handleTaskInputChange}/>
      </div>
      <div className={styles.priority_field}>
        <label htmlFor="priority">Priority :</label>
          <select value={formTask.priority} name="priority" id="priority" onChange={handlePriorityChange}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
      </div>
      <div className={styles.due_date_field}>
        <label htmlFor="due_date">Due date :</label>
        <input type="date" id="due_date" name="due_date"/>
      </div>
      <div className={buttonStyles.actions}>
        <button type="submit" className={`${buttonStyles.button} ${buttonStyles.save_button}`}>Save</button>
        <button onClick={cancelHandler} className={`${buttonStyles.button} ${buttonStyles.cancel_button}`}>Cancel</button>
      </div>
    </form>
  )
};

export default Form;
