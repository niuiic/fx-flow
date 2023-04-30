import { toAsync } from 'src/index.js'

describe('toAsync', () => {
  it('should work for mixed iterable and asyncIterable', async () => {
    let res = 0
    for await (const v of toAsync([Promise.resolve(1), Promise.resolve(2), 3, 4])) {
      res += v
    }
    expect(res).toEqual(10)
  })
})
