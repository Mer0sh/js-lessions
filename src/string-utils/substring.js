import { len } from "./len";

/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start = 0, end = len(text)) {
    if (typeof start !== 'number' || start < 0 || start % 1 !== 0)
    throw Error('invalid start index');

    if (typeof end !== 'number' || end < 0 || end > len(text) || end % 1 !== 0)
    throw Error('invalid end index');

    if (start > end)
    throw Error('invalid start and end index');

    let result = '';
    while (start !== end) {
        result += text[start];
        start++;
    }
    return result;
}
