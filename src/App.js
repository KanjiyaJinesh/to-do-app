import styles from './App.module.css';
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Main/>
      {/* <img src="../public/logo192.png" alt="" style={{ borderRadius : "2px" , flex: "1" , zIndex:"2"}}/> */}
    </div>
  );
}

export default App;
