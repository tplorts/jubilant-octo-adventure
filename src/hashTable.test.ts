import { hashFunc, MyHashTable } from './hashTable';

describe('HashTable', () => {
  test('hashFunc', () => {
    expect(hashFunc('foo')).toBe(324);
    expect(hashFunc('oof')).toBe(324);
    expect(hashFunc('bar')).toBe(309);
  });

  test('get/set', () => {
    const table = new MyHashTable<string>();

    expect(table.get('foo')).toBe(undefined);
    
    table.set('foo', 'apple');
    expect(table.get('foo')).toBe('apple');
    
    table.set('bar', 'banana');
    expect(table.get('bar')).toBe('banana');
    
    table.set('foo', 'watermelon');
    expect(table.get('foo')).toBe('watermelon');
  });
  test.skip('collision', () => {
    const table = new MyHashTable<string>();
    table.set('foo', 'apple')
    table.set('oof', 'banana')
    expect(table.get('foo')).toBe('apple')
    expect(table.get('oof')).toBe('banana');
  })
});