const functionNameAnalyse = (functionName: string) => {
    let grade = 0
    grade += functionNameSizeAnalyze(functionName)
    return grade
}

const functionNameSizeAnalyze = (functionName: string) => {
    let grade = 1
    if (functionName.length > 16) grade = 0
    return grade
}

export {
    functionNameAnalyse,
}