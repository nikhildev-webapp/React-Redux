import './App.css'
import CustomHook from './components/Hooks/CustomHook/CustomHook'
import Search from './components/Hooks/CustomHook/DebounceHook/Search'
import User from './components/Hooks/CustomHook/UseFetch/User'
import ExpenseTracker from './components/Hooks/ExpenseTracker'
import ExpensiveCalculatin from './components/Hooks/ExpensiveCalculatin'
import FocusInput from './components/Hooks/FocusInput'
import HooksIntro from './components/Hooks/HooksIntro'
import LiveClock from './components/Hooks/LiveClock'
import UseCallbackExample from './components/Hooks/UseCallbackExample'

function App() {
  return (
    <>
      <div className='container flex flex-col justify-center items-center text-white w-auto w-'>
        <h1 className='font-bold'>React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
     <div className="container"> 
        {/* Add components here...*/}   
        
     </div>
      
    </>
  )
}

export default App
