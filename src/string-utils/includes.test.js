import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';

describe('indexOfTests', () => {
  test('найти текст с середины текста', () => {
    expect(includes('hello world', 'world')).toBe(true);
  });
});
