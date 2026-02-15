import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('Something went wrong')
                }
                const result =  await res.json();
                setData(result)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[url])
  return {data,loading,error}
}

export default useFetch