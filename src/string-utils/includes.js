import { indexOf } from "./index-of"

/** Возвращает булево значение, включен ли searchString в text.
  startIndex, позволяет указать с какого индекса начать поиск. */
export function includes(text, searchString, startIndex=0) {
    return indexOf(text, searchString, startIndex) !== -1;
}
