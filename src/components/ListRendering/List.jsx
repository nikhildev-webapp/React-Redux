import React from 'react'

const List = () => {
    const fruits=['apple','mango','banana','guvava','pineapple']
  return (
      <>
          <div className='text-white border border-white w-xl p-4 m-4'>
              <p><strong>List:</strong>List refers to a collection of similar UI elements rendered dynamically from a data source, typically a javascript array</p>
              <p><strong>Key:</strong>Key provides a stable indentity for each item</p>
              <p>Render list in react by using <strong>map()</strong>function</p>
              <p><strong>Example:</strong>Render fruit list</p>
              <ol>
                  {fruits.map((i) => (
                      <li key={i} className='list-disc m-0.5'>{i}</li>
                  ))}
              </ol>
          </div>
      </>
  )
}

export default List