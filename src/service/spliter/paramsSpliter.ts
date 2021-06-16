/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getParamsIfExist = (text: string) => {
    const functionRegex = /\(([a-zA-Z]*.*)\)/
    const result:any = functionRegex.exec(text) || []
    if (result.length > 0) {
        return {text:result[1], start:parseInt(result.index), end:parseInt(result.index)+result[1].length}
    } else return false
}

export {
    getParamsIfExist,
}