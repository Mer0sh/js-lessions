import { len } from "./len";

export function indexOf(text, searchString, index=0) {
    if (typeof text !== 'string') 
    {throw Error('argument must be type of string');}

    if (typeof searchString !== 'string')
    {throw Error('invalid searchString string');}

    if (searchString === '')
    {return -1;}

    const searchStrLen = len(searchString);
    const maxIndex = len(text) - searchStrLen;

    if (typeof index !== 'number' || index < 0 || index > maxIndex + searchStrLen || index % 1 !== 0)
    {throw Error('invalid index');}

    for (let match = 0; index <= maxIndex; index++) {
    while (match < searchStrLen) {
        if (text[index + match] !== searchString[match]) {
            match = 0;
            break;
        }
        match++;
    }
        if (match) return index;
    }
    return -1;
}
