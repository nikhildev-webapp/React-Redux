import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [expense, setExpense] = useState([]);
    const [title, setTitle] = useState('');
    const [amount, setAmoount] = useState('');

    const addExpense = () => {
        const newExpense = {
            id: Date.now(),
            title,
            amount:Number(amount)
        }
        setExpense([...expense, newExpense]);
        setTitle('');
        setAmoount('');
    }
    const total = expense.reduce((sum, item) => sum + item.amount, 0);
  return (
      <>  
          <div className="container text-white p-2 m-0.5">
              <h3 className='font-bold'>Mini Project- ExpenseTracker</h3>
              <h3 className='text-white font-bold'>Creating FirstMini Project using useState-</h3>
              <div>
                  <h2>Total:{total}</h2>
                  <input value={title} type='text'  placeholder='Enter your Expense Title'onChange={e=>setTitle(e.target.value)}      className='border p-1 m-0.5 rounded' />
                  <input value={amount} type='text'  placeholder='Enter Expense Amount'onChange={e => setAmoount(e.target.value)} className='border p-1 m-0.5 rounded' />
                  <button onClick={addExpense} className='border rounded p-1 w-10 m-1'>Add</button>
                  {expense.map((exp) => (
                      <div key={exp.id}>{exp.title}-${exp.amount}</div>
                  ))}
            </div>
          </div>
      </>
  )
}

export default ExpenseTracker