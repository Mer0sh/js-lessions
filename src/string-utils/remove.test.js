import { describe, test, expect } from 'bun:test';
import { remove } from './remove';

describe('repeatTests', () => {
  test('', () => {
    expect(remove('Hello', 'o')).toBe('Hell');
    expect(remove('world', 'l')).toBe('word');
  });
})