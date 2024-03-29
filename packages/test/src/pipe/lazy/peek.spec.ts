import { expectType } from '#/utils'
import type { IteratorReturnValue, UniversalIterable } from 'fx-flow'
import { consume, peek, pipe, toAsync } from 'fx-flow'

expectType<Iterable<number>>(peek((v) => v + 1, [1]))
expectType<(iterable: UniversalIterable<number>) => IteratorReturnValue<UniversalIterable<number>>>(peek((v) => v + 1))

describe('peek', () => {
  describe('sync', () => {
    it('should call the passed "fn"', () => {
      let sum = 0
      pipe(
        [1, 2, 3, 4],
        peek((v) => {
          sum = sum + v
        }),
        consume
      )
      expect(sum).toEqual(10)
    })
  })

  describe('async', () => {
    it('should work for asyncIterable', () => {
      let sum = 0
      pipe(
        [Promise.resolve(1), 2, 3, 4],
        toAsync,
        peek((v) => {
          sum = sum + v
        }),
        consume
      ).then(() => {
        expect(sum).toEqual(10)
      })
    })
  })
})
