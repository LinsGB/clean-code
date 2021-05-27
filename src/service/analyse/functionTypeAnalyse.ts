const functionTypeAnalyse = (text: string) => {
    const modernFunctionRegex = /^function.*$/
    if(text.match(modernFunctionRegex)) return 0
    return 1
}

export {
    functionTypeAnalyse,
}