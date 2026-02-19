import "./App.css";
import AddUserForm from "./components/Axios/AddUserForm";
import AxiosIntro from "./components/Axios/AxiosIntro";
import UserList from "./components/Axios/UserList";


function App() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-white w-auto w-">
        <h1 className="font-bold">React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
      <div className="container">
        {/* Add components here...*/}
        <AxiosIntro />
        <UserList />
      </div>
    </>
  );
}

export default App;
