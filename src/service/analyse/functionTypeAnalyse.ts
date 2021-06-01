const functionTypeAnalyse = (text: string) => {
    const modernFunctionRegex = /^function.*$/
    console.log(modernFunctionRegex.exec(text))
    if(text.match(modernFunctionRegex)) return 0
    return 1
}

export {
    functionTypeAnalyse,
}