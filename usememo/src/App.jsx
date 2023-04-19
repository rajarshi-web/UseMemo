import { useState , useMemo } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState(10);

  const multiCountMemos = useMemo(function multiCount(){
    console.log("multiCount");
    return count * 2;
  },[count])

  return (
    <div className="App">
      <h1>USEMEMO HOOKS</h1>
      <p>useMemo is a hook in React that allows you to memoize expensive functions so that you can avoid calling them on every render 1. It returns a memoized value that will only be re-computed when one of the dependencies has changed</p>
      <p>Please watch console during the time of item changes multiple x 2 's function not calling{
        
      }</p>
      <h1>count: {count}</h1><h1>Multiple x 2: {multiCountMemos}</h1><br></br>
      <h1>item: {item}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
      <button onClick={()=>setCount(count-1)}>Decrease Count</button>
      <br></br><br></br>
      <button onClick={()=>setitem(item+10)}>Increase item</button>
      <button onClick={()=>setitem(item-10)}>Decrease item</button>
    </div>
  )
}

export default App
