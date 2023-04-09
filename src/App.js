import './App.css';

function App1() {
  return (
    <div className="App">
     <h1>i am heading one ....from first component </h1>
     <h2>i am heading two ....from second component </h2>
     <h3>i am heading three ....from comonent three</h3>
     <button>click me </button>
    </div>
  );
}

//first component
 function HeadingOne(){
  return <h1>i am heading one...from first component</h1>
 }

//second component 
function HeadingTwo(){
  return <h2>i am heading two....from second component</h2> 
}

//third component 

function HeadingThree(){
  return <h3> i am heading three.....from third component</h3>
}

//fourth  component

function Button(){
  return <button>click me</button>
}

function App(){
  return(
    <div>
      <App1/>
      <HeadingOne/>
      <HeadingTwo/>
      <HeadingThree/>
      <Button/>

    </div>
  )
}


export default App;
