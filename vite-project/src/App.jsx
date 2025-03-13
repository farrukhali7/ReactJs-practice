import { useState } from 'react'

function CounterApp() {
  let [num , setNum] = useState(0)
      const addCounter = () => {
        setNum(num + 1);
      }
      const lessCounter = () => {
        if (num < 1) {
          alert('Value cannot be in negative!!')
          return
        }
        setNum(num - 1);
}
return (
      <>
        <h1 style={{ textAlign: 'center'}}>Counter:</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px'
        }}>
          <button onClick={lessCounter} style={{ fontSize: '30px', border:'2px solid white' }}>-</button>
          <h1>{num}</h1>
          <button onClick={addCounter} style={{ fontSize: '30px', border:'2px solid white'}}>+</button>
        </div>
      </>
    )
  }
export default CounterApp
