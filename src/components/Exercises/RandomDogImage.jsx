import React, { useEffect, useState } from 'react'

function RandomDogImage() {
    const [image, setImage] = useState(null);
    const[Click,setClick]=useState(false)
    const [loading, setLoading] = useState(false);

    const getDog = async () => {
        setLoading(true);
        setClick(true)
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        setImage(data.message);
        setLoading(false);
        setClick(false)
    }

    useEffect(() => {
        getDog()
    },[])
  return (
      <>
          <div className="conatiner text-white p-4 m-2">
              <h3>Get Random Dog Image</h3>
              {loading ? (
              <p>Loading...</p>
              ) : (
                      <img src={image} alt="DogImage" style={{width:'300px'}} className='rounded-xl'/>
              )}
              <button onClick={getDog} className='border rounded-xl p-2 m-2'>getDogImage</button>
            </div>
      </>
  )
}

export default RandomDogImage