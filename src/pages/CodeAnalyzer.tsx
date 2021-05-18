import React,{ useState } from "react";
import {getFunctionIfExist} from '../service/functionSpliter'
import {getParamsIfExist} from '../service/paramsSpliter'
import {getFunctionNameIfExist} from '../service/functionNameSpliter'
import {functionNameAnalyse} from '../service/functionNameAnalyse'
import {functionAnalyse} from '../service/functionAnalyse'
import {paramsAnalyse} from '../service/paramsAnalyse'

function CodeAnalizer() {
  const [text, setText] = useState('');
  
  const onClick = () => {
    let grade = 0
    const functionText = getFunctionIfExist(text)
    const paramsText = getParamsIfExist(text)
    const functionNameText = getFunctionNameIfExist(text)
    if(functionNameText && functionText && paramsText) {
      grade += functionNameAnalyse(text)
      grade += functionAnalyse(functionText)
      grade += paramsAnalyse(paramsText)
    }
    console.log("GRADE => ", grade)
  }

  return (
    <div className="App">
      <title>Fake Hemingway</title>
      <div>
        <h1>Fake Hemingway</h1>
        <textarea name="" id="text-area" onChange={event => setText(event.target.value)}></textarea>
        <button onClick={() => onClick()}></button>
        <div id="output"></div>
      </div>
    </div>
  );
}

export default CodeAnalizer;
