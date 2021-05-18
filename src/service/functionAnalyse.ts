const functionAnalyse = (text: string) => {
    let grade = 0
    const params = text.replace(/[ \e\t]/,'').split(',')
    grade += functionTypeAnalyse(params)
    grade += functionNameSizeAnalyse(params)
    return grade
}

const functionTypeAnalyse = (params: string[]) => {
    switch (params.length){
        case 1:
            return 2
        case 2:
            return 1
        case 3:
            return 0
        default:
            return -1
    }
}

const functionNameSizeAnalyse = (params: string[]) => {
    let grade = -1
    params.forEach(param => {
        if(param.length < 11) grade = 1
        else if (param.length < 16) {
            grade = grade < 0 ? 0 : grade
        }
    })
    return grade
}

export {
    functionAnalyse,
}