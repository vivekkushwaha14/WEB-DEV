import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setsetshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: " this is good todo"

    },
    {
      title: "hey 1",
      desc: " this is good todo 1"

    },
    {
      title: "hey 2",
      desc: " this is good todo 2"

    }

  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m4 border border-1 border-purple-300">
  //   </div>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div></>)

  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn is true</button>} */}
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title} className="m4 border border-1 border-purple-300">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
          </div>
      })}
      <div className="card">
        <button onClick={() => setsetshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>  
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
