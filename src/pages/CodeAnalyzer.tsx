import React, { useState } from "react";
import { getFunctionIfExist } from '../service/spliter/functionSpliter'
import { getParamsIfExist } from '../service/spliter/paramsSpliter'
import { getFunctionName } from '../service/spliter/functionNameSpliter'
import { functionNameAnalyse } from '../service/analyse/functionNameAnalyse'
import { functionTypeAnalyse } from '../service/analyse/functionTypeAnalyse'
import { paramsAnalyse } from '../service/analyse/paramsAnalyse'
import './index.css'

function CodeAnalizer() {
  const [text, setText] = useState('');
  const [editable, setEditable] = useState(false);

  const onClick = () => {
    let grade = 0
    const functionText = getFunctionIfExist(text)
    const paramsText = getParamsIfExist(text)
    const functionNameText = getFunctionName(functionText || '')
    if (functionNameText && functionText && paramsText) {
      grade += functionTypeAnalyse(functionText)
      grade += paramsAnalyse(paramsText)
      grade += functionNameAnalyse(functionNameText)
    }
    setEditable(false)
    console.log("GRADE =>", grade)
  }

  return (
    <div className="App">
      <title>Clean Code</title>
      {
        editable &&
        <div>
          <h1>Clean Code</h1>
          <textarea name="" id="text-area" onChange={event => setText(event.target.value)}></textarea>
          <button onClick={() => onClick()}></button>
          <div id="output"></div>
        </div>
      }
      {
        !editable &&
        <div id="textarea" contentEditable><p>My mother has <span>blue</span> eyes.</p></div>
      }
    </div>
  );
}

export default CodeAnalizer;
