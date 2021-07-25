import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index.js'
import './App.css';
import { applyNumber, changeOperation, clearDisplay, memoryAdd, memoryApply, memoryClear } from './actions/index.js';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const numberButton = (num) => {
    dispatch(applyNumber(num))
  }

  const operatorButton = (op) => {
    dispatch(changeOperation(op))
  }

  const clearButton = () => {
    dispatch(clearDisplay())
  }

  const memoryAddButton = () => {
    dispatch(memoryAdd());
  }

  const memoryApplyButton = () => {
    dispatch(memoryApply());
  }

  const memoryClearButton = () => {
    dispatch(memoryClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => memoryAddButton()} value={"M+"}/>
              <CalcButton onClick={() => memoryApplyButton()} value={"MR"}/>
              <CalcButton onClick={() => memoryClearButton()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => numberButton(1)} value={1}/>
              <CalcButton onClick={() => numberButton(2)} value={2}/>
              <CalcButton onClick={() => numberButton(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => numberButton(4)} value={4}/>
              <CalcButton onClick={() => numberButton(5)} value={5}/>
              <CalcButton onClick={() => numberButton(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => numberButton(7)} value={7}/>
              <CalcButton onClick={() => numberButton(8)} value={8}/>
              <CalcButton onClick={() => numberButton(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => operatorButton("+")} value={"+"}/>
              <CalcButton onClick={() => operatorButton("*")} value={"*"}/>
              <CalcButton onClick={() => operatorButton("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clearButton()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
