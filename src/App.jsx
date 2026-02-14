import './App.css'
import ExpenseTracker from './components/Hooks/ExpenseTracker'
import FocusInput from './components/Hooks/FocusInput'
import HooksIntro from './components/Hooks/HooksIntro'
import LiveClock from './components/Hooks/LiveClock'

function App() {
  return (
    <>
      <div className='container flex flex-col justify-center items-center text-white w-auto w-'>
        <h1 className='font-bold'>React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
     <div className="container"> 
        {/* Add components here...*/}
        <HooksIntro />
        <ExpenseTracker />
        <LiveClock />
        <FocusInput/>
     </div>
      
    </>
  )
}

export default App
