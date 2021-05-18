/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionNameIfExist = (text: string) => {
    const comunFunctionText = getComunFunctionName(text)
    const modernConstFunctionText = getModernFunctionName(text)
    if (comunFunctionText) {
        return comunFunctionText
    } else if (modernConstFunctionText) {
        return modernConstFunctionText
    }
    return false
}

const getComunFunctionName = (text: string) => {
    const functionRegex = new RegExp(/^.*function[ \e\t]([a-zA-Z]+)[ \e\t]\(.*$/)
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

const getModernFunctionName = (text: string) => {
    const functionRegex = new RegExp(/^.*const[ \e\t]([a-zA-Z]+)[ \e\t]=.*$/)
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

export {
    getFunctionNameIfExist,
}