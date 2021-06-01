/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionName = (text: string) => {
    const functionNameRegex = /([a-zA-Z]+)[ \e\t]*(?:\(|=)/
    const result = functionNameRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

export {
    getFunctionName,
}