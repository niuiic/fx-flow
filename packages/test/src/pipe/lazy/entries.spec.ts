import { expectType } from '#/utils'
import { entries } from 'fx-flow'

expectType<Iterable<[1, string] | ['2', string]>>(entries({ 1: '', '2': '' }))

describe('entries', () => {
  it('should return an iterator which iterates entries of the given object', () => {
    const obj = {
      a: 1,
      b: '2',
      c: true,
      d: null,
      e: undefined
    }
    const iter = entries(obj)
    expect(iter.next().value).toEqual(['a', 1])
    const res = [...iter]
    expect(res).toEqual([
      ['b', '2'],
      ['c', true],
      ['d', null],
      ['e', undefined]
    ])
  })

  it('should only deal with enumerable properties', () => {
    const obj = { a: 1, b: 2, c: 3 }
    Object.defineProperty(obj, 'a', {
      enumerable: false
    })
    Object.defineProperty(obj, 'c', {
      enumerable: false
    })
    const res = [...entries(obj)]
    expect(res).toEqual([['b', 2]])
  })

  it('should only deal with its own properties', () => {
    class Parent {
      public a = 1
    }
    class Child extends Parent {
      public b = 2
    }
    const instance = new Child()
    const proto = Object.getPrototypeOf(instance)
    // eslint-disable-next-line no-proto
    proto.__proto__.c = 3
    const res = [...entries(instance)]
    expect((instance as any).c).toEqual(3)
    expect(res).toEqual([
      ['a', 1],
      ['b', 2]
    ])
  })
})
