/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const paramsAnalyse = (text: string) => {
    let grade = 0
    const params = text.replace(/[ \e\t]/,'').split(',')
    grade += paramsQuantityAnalyse(params)
    grade += paramsSizeAnalyze(params)
    return grade
}

const paramsQuantityAnalyse = (params: string[]) => {
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

const paramsSizeAnalyze = (params: string[]) => {
    let grade = 1
    params.forEach(param => {
        if (param.length > 16) {
            grade = 0
        }
    })
    return grade
}

export {
    paramsAnalyse,
}