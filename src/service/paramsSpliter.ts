/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getParamsIfExist = (text: string) => {
    const functionRegex = new RegExp(/^.*\(([a-zA-Z]*.*)\).*$/)
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

export {
    getParamsIfExist,
}