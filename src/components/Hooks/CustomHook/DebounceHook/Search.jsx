import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce';

const Search = () => {
    const [query, setQuery] = useState('');
    const debounceQuery = useDebounce(query, 1000)
    
    useEffect(() => {
        if (debounceQuery) {
            console.log('API Call with:', debounceQuery);
        }
    }, [debounceQuery]);
  return (
      <>
          <div className="container text-white p-2 m-0.5">
              <h3 className="font-bold">CustomHook project-useDebounce hook</h3>
              <h3 className="font-bold">Creating a Search filter using CustomHook.</h3>
              <input type="text" value={query} className="border rounded p-1" onChange={e=>setQuery(e.target.value)}/>
        </div>
      </>
  )
}

export default Search