/** Возвращает text повторенный count раз. */
export function repeat(text, count = 1) {
    if (typeof text !== 'string')
    {throw Error('argument must be type of string');}
    
    if (typeof count !== 'number' || count < 0 || count % 1 !== 0)
    {throw Error('invalid count');}
    
    let result = '';
    while (count !== 0) {
        result += text;
        count--;
    }
    return result;
}
