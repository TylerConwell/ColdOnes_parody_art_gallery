import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* working title for the gallery */}
      <h1>Cold Ones Art Gallery</h1>

      {/* Stim button for randomly pressing */}
      <div className="fun_button">
        <button onClick={() => setCount((count) => count + 1)}>
          Wow you clicked this button {count} times
        </button>

        <p>
          Incase you needed a way to relieve stress, 
          or use it as a voting mechanism since I havent made one yet.
        </p>
      </div>

      <div>
        
      </div>

    </>
  )
}

export default App
