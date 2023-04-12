import { useState } from "react";

export function Compo2(){
    const [count , setCount] = useState(0);

    function Increase(){
         setCount(count + 1)
        }
   
    function Decrease(){
        if (count>0){
            setCount(count -1)
        }

        else{
            setCount(count)
        }
    }    
    
    return (

        <div style={{margin:100}}>
            <h1 style={{color: "red" , fontSize:60}}>{count}</h1>
            <button onClick={Increase} style={{marginRight:5}}>Increase</button>
            <button onClick = {Decrease} style = {{marginLeft:5}}>Decrease</button>
        </div>
    );
} 
    
