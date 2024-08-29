import { len } from "./len";

/** Возвращает "развернутую" копию text */
export function reverse(text) {
    let textLen = len(text);
    let result = '';
    while (textLen !== 0) {
        textLen--;
        result += text[textLen];
    }
    return result;
}
