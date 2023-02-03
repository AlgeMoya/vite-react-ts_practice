import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  // useState를 사용하여 open 상태를 변경한다. (open일 때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let text: string = "";
  let number: number = 5;

  // 이렇게 하면 오류가 난다!
  // number = "asdf";
  // text = 5;

  const array: number[] = [1, 2, 3];
  // array.push("asdf"); // 이렇게 해도 오류가 난다

  function squareNumbers(numbers: number[]): number[] {
    return numbers.map((n) => n * n);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <button onClick={openModal}>모달팝업</button>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
        </Modal>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
