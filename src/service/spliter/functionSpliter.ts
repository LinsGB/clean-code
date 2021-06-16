/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionIfExist = (text: string) => {
    const comunFunctionText = getComunFunction(text)
    const modernFunctionText = getModernFunction(text)
    if (comunFunctionText) {
        return comunFunctionText
    } else if (modernFunctionText) {
        return modernFunctionText
    }
    return false
}

const getComunFunction = (text: string) => {
    const functionRegex = /(function[ \e\t]+\w+[ \e\t]*\(.*\)[ \e\t]*{(?:[ \t\n\r\f\v]|.)*})/
    const result:any = functionRegex.exec(text) || []
    if (result.length > 0) {
        return {text:result[1], start:parseInt(result.index), end:parseInt(result.index)+result[1].length}
    } else return false
}

const getModernFunction = (text: string) => {
    const functionRegex = /((?:const)?[ \e\t]*\w+[ \e\t]*=[ \e\t]*\(.*\)[ \e\t]*=>[ \e\t]*{(?:[ \t\n\r\f\v]|.)*})/
    const result:any = functionRegex.exec(text) || []
    if (result.length > 0) {
        return {text:result[1], start:parseInt(result.index), end:parseInt(result.index)+result[1].length}
    } else return false
}

export {
    getFunctionIfExist,
}