export function remove(text, charToRemove) {
    if (typeof text !== 'string' || typeof charToRemove !== 'string')
    {throw Error('argument must be type of string');}
    
    let index = 0;
    let result = '';
    while (text[index] !== undefined) {
        if (text[index] !== charToRemove)
        {result += text[index];}
        index++;
    }
    return result;
}