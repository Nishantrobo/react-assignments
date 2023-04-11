import './App.css';

function App() {
  return (
    <div className='App'>
      <Compo1/>
      <Compo2/>
      <Compo3/>
    </div>
  )
}

function Compo1(){
  return <h1>Register here...</h1>
}

function Compo2(){
  return (
    <>
    <input placeholder='mobile ...'></input>
    <br></br>
    <br></br>
    <input type='password' placeholder='password...'></input>
    <br></br>
    <br></br>
    </>

  )
}

function Compo3(){
  return <button>submit</button>
}
export default App;