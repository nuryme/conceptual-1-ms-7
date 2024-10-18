import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/products'
import Product from './components/product/Product'
import Product2 from './components/product/Product2'
import Service from './components/product/Service'

function App() {
  const information = {
    msg: 'secret',
    phone: '0182345679'
  }

  //----useState
  const [state, setState] = useState(0)
  const [state1, setState1] = useState(0)
  let storageVar = 0

  const handleHeroAlom = () => {
    console.log('okey boss')
  }

  // console.log(state)

  const handleState = () => {
    // const sum = state + 1
    // setState(sum)
    setState(state + 1)
    console.log(state)
  }

  const handleVariableCount = () => {
    storageVar = storageVar + 1;
    console.log(storageVar)
  }
  // console.log('hello')
  
    //----useEffect
    const usingEffect = () => {
      setState1(state1 + 1)
    }
    
    useEffect(() => {
      // console.log('hello from use effect')
    }, [state1])


    //--------- conditional rendering
    const [status, setStatus] = useState(true)
    const handleStatus = () => {
      setStatus(!status)
    }
    
    //----------  child to parent (data)
    const [trans, setTrans] = useState(true)
    const transfer = (msg) => {
      setTrans(msg)
    }
    


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div>
        <Products info = {information}></Products>
      </div>

      <div style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '20px',
        margin: '20px'
      }}>
        <h1>useState</h1>
        <h2>This is a state count {state}</h2>
        <h2>This is a variable count {storageVar}</h2>
        <button onClick={handleState}>state count</button>
        <button onClick={handleVariableCount}>variable count</button>
        <br />
        <button onClick={handleHeroAlom} style={{
          marginTop: '30px',
          padding: '10px'
        }}>Hero Alom</button>
      </div>

      <div style={{
        backgroundColor: 'lightcoral',
        padding: '20px',
        borderRadius: '20px',
        margin: '20px'
      }}>
        <h1>useEffect</h1>
        <h2>This is a state count {state1}</h2>
        <button onClick={usingEffect}>useEffect</button>
      </div>

      <div style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '20px',
        margin: '20px'
      }}>
        <h1>conditional rendering</h1>
        <button onClick={handleStatus}>Handle Status</button>
        {/* {
          status? <p>status is true</p> : <p>status is false</p>
        } */}
        {
          status? <Product></Product> : <Product2></Product2>
        }
      </div>

      <div style={{
        backgroundColor: 'lightcoral',
        padding: '20px',
        borderRadius: '20px',
        margin: '20px'
      }}>
        <h1>child to parent (data)</h1>
        <Service transfer= {transfer}></Service>
        <button>Printing: {trans}</button>
      </div>

    </>
  )
}

//* -------------- todays topics ------------ */
//1. virtual DOM
//2. nested components
//3. useState
//4. useEffect
//5. conditional rendering
//6. child to parent (data)

export default App
