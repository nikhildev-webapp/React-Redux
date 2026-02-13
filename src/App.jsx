import './App.css'
import Condition from './components/ConditionalRendering/Condition'
import Form from './components/Form/Form'
import List from './components/ListRendering/List'
import IntroProps from './components/Props/IntroProps'
import UseState from './components/State/UseState'


function App() {
  return (
    <>
      <div className='container flex flex-col justify-center items-center text-white w-auto w-'>
        <h1 className='font-bold'>React+Redux</h1>
        <p>Learn React and Redux from Basics</p>
      </div>
      
        {/* Add components here...*/}
        <IntroProps name='Nikhil' age='20' profession='Software Developer' />
        <UseState />
        <List />
        <Condition />
        <Form/>
       
      
    </>
  )
}

export default App
