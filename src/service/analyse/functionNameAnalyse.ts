const functionNameAnalyse = (functionName: string) => {
    let grade = 0
    grade += functionNameSizeAnalyze(functionName)
    return grade
}

const functionNameSizeAnalyze = (functionName: string) => {
    let grade = -1
    if (functionName.length < 11) grade = 1
    else if (functionName.length < 16) {
        grade = grade < 0 ? 0 : grade
    }
    return grade
}

export {
    functionNameAnalyse,
}