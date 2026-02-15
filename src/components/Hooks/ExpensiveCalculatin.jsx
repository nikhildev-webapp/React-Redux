import React, { useMemo, useState } from 'react'

function slowFunction(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const ExpensiveCalculatin = () => {
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');

    const result = useMemo(() => {
        return slowFunction(number);
    }, [number]); 

  return (
      <>
          <div className="container text-white p-2 m-0.5">
              <h3 className='font-bold'>Mini Project-ExpensiveCaluator</h3>
              <h3 className='font-bold'>Creating FourthMini Project using useMemo.</h3>
              <input type="number" className=" border p-1 m-0.5 rounded" placeholder='Enter number' value={number} onChange={(e)=>setNumber(+e.target.value)} />
              <input type="text" className=" border p-1 m-0.5 rounded" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} />
              <p>Result: {result}</p>
            </div>
      </>
  )
}

export default ExpensiveCalculatin
