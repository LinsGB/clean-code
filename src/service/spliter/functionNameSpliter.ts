/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionName = (text: string) => {
    const functionRegex = /([a-zA-Z]+)[ \e\t]*(?:\(|=)/
    const result = functionRegex.exec(text) || []
    if (result.length > 0) {
        return result[1]
    } else return false
}

export {
    getFunctionName,
}