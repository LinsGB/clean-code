/*
Dados funções:
TIPO
NOME
PARAMETRO
*/
const getFunctionName = (text: string) => {
    const functionNameRegex = /([a-zA-Z]+)[ \e\t]*(?:\(|=)/
    const result:any = functionNameRegex.exec(text) || []
    if (result.length > 0) {
        return {text:result[1], start:parseInt(result.index), end:parseInt(result.index)+result[1].length}
    } else return ''
}

export {
    getFunctionName,
}