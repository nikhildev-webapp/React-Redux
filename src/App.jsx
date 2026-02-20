import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RouterIntro from "./components/React-Router/RouterIntro";
import Navbar from "./components/React-Router/Navbar";
import About from "./components/React-Router/About";
import Contact from "./components/React-Router/Contact";
import ProfileCard from "./components/Exercises/ProfileCard";
import Counter from "./components/Exercises/Counter";
import TypeInput from "./components/Exercises/TypeInput";
import RandomDogImage from "./components/Exercises/RandomDogImage";
import { SetLogin } from "./components/Exercises/SetLogin";
import ProductList from "./components/Exercises/ProductList";


function App() {
  //!React router routes:
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Navbar />,
  //     children:[
  //       { index: true, element: <RouterIntro /> },
  //       { path: '/about', element: <About /> },
  //       {path:'/contact',element:<Contact/>}
  //     ]

  //   }
  // ])
  return (
    <>
      <div className="container flex flex-col justify-center items-center text-white w-auto w-">
        <h1 className="font-bold">React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
      <div className="container">
        {/* Add components here...*/}
        <ProfileCard name='Nikhil' age='20' education='Bachelors' profession='Software Developer' quote={'One Line Code At Time'} />
        <Counter />
        <TypeInput />
        <RandomDogImage />
        <SetLogin />
        <ProductList/>
      </div>
       {/* Router Provider⬇️ */}
       {/* <RouterProvider router={router}></RouterProvider>  */}
    </>
  );
}

export default App;
