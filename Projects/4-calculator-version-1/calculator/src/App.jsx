import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";

function App() {

let [calVal , setCalVal ] = useState("");
  
  return (
    <div className={styles.calculator}>
      <Display displayValue = {caalValue}></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
