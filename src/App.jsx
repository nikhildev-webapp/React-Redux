import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/ReduxTool-kit/Counter/Counter";
import ReduxIntro from "./components/ReduxTool-kit/ReduxIntro";
import { store } from "./components/ReduxTool-kit/Counter/store";

function App() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-white w-auto w-">
        <h1 className="font-bold">React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
      <div className="container">
        {/* Add components here...*/}
        <ReduxIntro />
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    </>
  );
}

export default App;
