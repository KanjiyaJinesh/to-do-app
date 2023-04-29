import { useCallback, useState, useEffect, createContext, useMemo } from "react";
import ToDoList from "./components/ToDoList.js";
import RunningList from "./components/RunningList.js";
import CompletedList from "./components/CompletedList.js";
import styles from "./Main.module.css";
import {getInitialPendingList, getInitialRunningList, getInitialCompletedList, generateId} from "./components/utils.js";

export const functionContext = createContext();

const Main = () => {
  const [pendingList, setPendingList] = useState(getInitialPendingList);
  const [runningList, setRunningList] = useState(getInitialRunningList);
  const [completedList, setCompletedList] = useState(getInitialCompletedList);

  console.log("Main");

  const addToList  = useCallback((task) => {
    if(task){
      let newTask = {
        ...task,
        id: generateId(),
      }
      setPendingList([
        ...pendingList,
        newTask
      ]);
    }
    
  },[pendingList]);

  const removeFromList = useCallback((id, status) => {
    if(status === "pending"){
      setPendingList(pendingList.filter(li => li.id !== id));
    } else if (status === "running"){
      setRunningList(runningList.filter(li => li.id !== id));
    } else if (status === "completed"){
      setCompletedList(completedList.filter(li => li.id !== id));
    }    
  },[pendingList, runningList, completedList]);

  const updateList = useCallback((id, status) => {
    let task;
    if(status === "pending"){
      setPendingList( pendingList.filter(t => {
        if(t.id === id){
          task = t;
          return false
        }
        return true;
      }));
      
      setRunningList([
        ...runningList,
        {
          ...task,
          status: "running",
        },
      ]);
    } else if (status === "running"){
      setRunningList( runningList.filter(t => {
        if(t.id === id){
          task = t;
          return false
        }
        return true;
      }));
      console.log("Hey");
      setCompletedList([
        ...completedList,
        {
          ...task,
          status: "completed",
        },
      ]);
    } else {
      throw new Error(`Unidentified status provided - ${status}`);
    }
  },[pendingList, runningList, completedList]);

  const editList  = useCallback((updatedTask, id, status) => {

    if(status === "pending"){
      setPendingList(pendingList.map(task => {
        if(task.id === id){
          return {...updatedTask}
        }
        return task;
      }));
    } else if (status === "running"){
      setRunningList(runningList.map(task => {
        if(task.id === id){
          return {...updatedTask}
        }
        return task;
      }));
    } else if (status === "completed"){
      setCompletedList(completedList.map(task => {
        if(task.id === id){
          return {...updatedTask}
        }
        return task;
      }));
    }  else {
      throw new Error(`Unidentified status provided - ${status}`);
    }
  },[pendingList, runningList, completedList]);



  useEffect(() => {
    console.log("1");
    localStorage.setItem("lsPendingList",JSON.stringify(pendingList));
  },[pendingList]);

  useEffect(() => {
    console.log("2");
    localStorage.setItem("lsRunningList",JSON.stringify(runningList));
  },[runningList]);

  useEffect(() => {
    console.log("3");
    localStorage.setItem("lsCompletedList",JSON.stringify(completedList));
  },[completedList]);

  const allFunctions = useMemo(() => {
    return {
      addToList,
      removeFromList,
      updateList,
      editList
    }
  },[addToList, removeFromList, updateList, editList]);

  return (
    <div className={styles.main_wrapper}>
      <functionContext.Provider value={allFunctions}>
        <div className={styles.main}>
          <ToDoList 
            list={pendingList} 
          />
          <RunningList 
            list={runningList} 
          />
          <CompletedList 
            list={completedList} 
          />
        </div>
      </functionContext.Provider>
    </div>
  )
};

export default Main;
