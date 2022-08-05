import React, {useState, useEffect} from 'react'

function Counter() {
    const[count,setCount] = useState(()=>{
        let val
        try{
            val = JSON.parse(window.localStorage.getItem('app-count') || '0')
        }
        catch(err){
            val = 0
        }

        return val;
    })

    useEffect(()=>{
        window.localStorage.setItem('app-count', count)
    },[count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            {count}
        </button>
        <br />
        <button onClick={()=>setCount(0)}>
            Clear Count
        </button>
    </div>
  )
}

export default Counter
