import React, {useEffect, useState} from 'react'

function LocalStorageHook({key, defaultValue}) {

    const[state, setState] = useState(()=>{
        let value
        try{
            value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
        }
        catch(err){
            value = defaultValue
        }
        return value
    })

    useEffect(()=>{
        window.localStorage.setItem(key, state)
    }, [state])

    return [state,setState]
}

function LocalStorageHookAccess(){
    const[count,setCount] = LocalStorageHook('my-app-count', 0)

    return(
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

export default LocalStorageHookAccess
