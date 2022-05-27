import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {
  //when with the help of provider we provide state to complete app
  //then the state can be accessed easily using useSeletor hook.
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is counter example using Redux</h1>
      <button style={{backgroundColor:"green"}}
      onClick={()=> dispatch(incNumber(5))}>+</button>
      <input type="text" value={myState} />
      <button style={{backgroundColor:"red"}}
      onClick={()=> dispatch(decNumber())}>-</button>
      
    </div>
  )
}

export default App