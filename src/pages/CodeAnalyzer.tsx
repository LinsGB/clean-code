import React, { useState } from "react";
import "./style.css";
import { getFunctionIfExist } from "../service/spliter/functionSpliter";
import { getParamsIfExist } from "../service/spliter/paramsSpliter";
import { getFunctionName } from "../service/spliter/functionNameSpliter";
import { functionNameAnalyse } from "../service/analyse/functionNameAnalyse";
import { functionTypeAnalyse } from "../service/analyse/functionTypeAnalyse";
import { paramsAnalyse } from "../service/analyse/paramsAnalyse";
import MySpan from "../componet/MySpan";

function CodeAnalizer() {
  const [text, setText] = useState("");
  const [grade, setGrade] = useState(0);
  const [editable, setEditable] = useState(true);
  const [textBlocks, setTextBlocks] = useState<ITextBlock[]>([]);

  let functionAddress = { start: 0, end: 0 };
  let paramsAddress = { start: 0, end: 0 };
  let functionNameAddress = { start: 0, end: 0 };
  let functionText = "";
  let paramsText = "";
  let functionNameText = "";
  let functionGrade = 0;
  let paramsGrade = 0;
  let functionNameGrade = 0;

  const onClick = () => {
    setValues();
    setGrade(getGrade());
    mountTextBlocks()
    //setEditable(false);
  };

  const getGrade = () => {
    functionGrade = functionText ? functionTypeAnalyse(functionText) : 0;
    paramsGrade = paramsText ? paramsAnalyse(paramsText) : 0;
    functionNameGrade = functionNameText
      ? functionNameAnalyse(functionNameText)
      : 0;
    return functionGrade + paramsGrade + functionNameGrade;
  };

  const mountTextBlocks = () => {
    let textBlocks:ITextBlock[] = []
    let hasParams = false
    let texts1 = text.split(functionNameText)
    texts1.splice(1, 0, functionNameText)
    textBlocks.push(mountFunctionBlock(texts1[0], functionGrade))
    texts1.shift()
    textBlocks.push(mountFunctionBlock(texts1[0], functionNameGrade))
    texts1.shift()
    if (paramsText.length > 0 ) {
      hasParams = true
      let texts2 = texts1[0].split(paramsText)
      console.log(texts2)
      texts1.pop()
      textBlocks.push(mountFunctionBlock(texts2[0], functionGrade))
      texts2.shift()
      texts2.splice(0, 0, paramsText)
      textBlocks.push(mountFunctionBlock(texts2[0], paramsGrade))
      texts2.shift()
      textBlocks.push(mountFunctionBlock(texts2[0], functionNameGrade))
      texts1=[]
    }
    if(texts1.length > 0)textBlocks.push(mountFunctionBlock(texts1[0], functionGrade))
    const grades = [functionGrade, paramsGrade, functionNameGrade]
    console.log(grades)
    setTextBlocks(textBlocks)
  }

  const mountFunctionBlock = (text:string, grada:number) => {
    const color = grada > 0 ? 'GREEN' : 'RED'
    const textBlock: ITextBlock = {
      color,
      text
    }
    return textBlock
  }


  const setValues = () => {
    const functionAnalyzed = getFunctionIfExist(text);
    functionAddress.start = functionAnalyzed ? functionAnalyzed.start : 0;
    functionAddress.end = functionAnalyzed ? functionAnalyzed.end : 0;
    functionText = functionAnalyzed ? functionAnalyzed.text : "";
    const paramsAnalyzed = functionAnalyzed
      ? getParamsIfExist(functionAnalyzed.text || "")
      : "";
    paramsAddress.start = (paramsAnalyzed ? paramsAnalyzed.start : 0) + functionAddress.start +1
    paramsAddress.end = (paramsAnalyzed ? paramsAnalyzed.end : 0) + functionAddress.start +1
    paramsText = paramsAnalyzed ? paramsAnalyzed.text : "";
    const functionNameAnalyzed = functionAnalyzed
      ? getFunctionName(functionAnalyzed.text || "")
      : "";
    functionNameAddress.start = (functionNameAnalyzed
      ? functionNameAnalyzed.start
      : 0) + functionAddress.start
    functionNameAddress.end = (functionNameAnalyzed
      ? functionNameAnalyzed.end
      : 0) + functionAddress.start
    functionNameText = functionNameAnalyzed ? functionNameAnalyzed.text : "";
  };

  const mountMySpan = () => {
    return textBlocks.map(textBlock => {
      return (
        <MySpan color={textBlock.color} text={textBlock.text}></MySpan>
      )
    })
  }

  return (
    <div className="App">
      <title>Clean Code</title>
      {editable && (
        <div>
          <h1>Clean Code</h1>
          <textarea
            name=""
            id="text-area"
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          <button onClick={() => onClick()}></button>
          <div id="output"></div>
        </div>
      )}
        <>
        {mountMySpan()}
        {grade}</>
      
    </div>
  );
}

interface ITextBlock {
  color: string;
  text: string;
}

export default CodeAnalizer;
