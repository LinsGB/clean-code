/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionIfExist = (text: string) => {
    const comunFunctionText = getComunFunction(text)
    const modernFunctionText = getModernFunction(text)
    const modernConstFunctionText = getModernConstFunction(text)
    if (comunFunctionText) {
        return comunFunctionText
    } else if (modernFunctionText) {
        return modernFunctionText
    } else if (modernConstFunctionText) {
        return modernConstFunctionText
    }
    return false
}

const getComunFunction = (text: string) => {
    const functionRegex = new RegExp('^.*(function[ \e\t]*(\w*)[ \e\t]*\(.*\){(?:[ \t\n\r\f\v]|.)*}).*$')
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

const getModernConstFunction = (text: string) => {
    const functionRegex = /^.*(const).*$/
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

const getModernFunction = (text: string) => {
    const functionRegex = /^.*([ \e\t]*.*[ \e\t]*=[ \e\t]*\(.*\)[ \e\t]*=>[ \e\t]*{(?:[ \t\n\r\f\v]|.)*}).*$/
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

export {
    getFunctionIfExist,
}