import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#FAFCCF") 

  return (
    <div className = "w-full h-screen" style = {{background : color}}> 
      <div className = "fixed flex flex-wrap justify-center rounded-full bottom-12 inset-x-0 px-2">
        <div className = "flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl">
          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-white shadow-lg" onClick = {() => setColor("red")} style = {{background : "red"}} >
          Red
          </button>

          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-black shadow-lg" onClick = {() => setColor("yellow")} style = {{background : "yellow"}} >
          Yellow
          </button>

          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-white shadow-lg" onClick = {() => setColor("Magenta")} style = {{background : "Magenta"}} >
          Magenta
          </button>

          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-white shadow-lg" onClick = {() => setColor("Violet")} style = {{background : "Violet"}} >
          Violet
          </button>

          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-white shadow-lg" onClick = {() => setColor("Green")} style = {{background : "Green"}} >
          Green
          </button>

          <button  className="outline-none px-4 py-1 text-2xl rounded-full text-white shadow-lg" onClick = {() => setColor("Brown")} style = {{background : "Brown"}} >
          Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
