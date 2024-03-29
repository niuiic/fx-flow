import { expectType } from '#/utils'
import { Result, err, ok } from 'fx-flow'

expectType<number>(ok(1).unwrapOr(2))
expectType<Promise<Result<number>>>(ok(1).wait())
expectType<Result<number>>(ok(1).mapOr(() => 2, 2))
expectType<number>(ok(1).unwrap())
expectType<string | undefined>(ok(1).error())
expectType<boolean>(ok(1).isErr())
expectType<boolean>(ok(1).isOk())
expectType<Result<number>>(ok(1).mapErr(''))

describe('result', () => {
  it('should return "data" if success when call "unwrap"', () => {
    const data = {}
    expect(new Result({ data }).unwrap()).toEqual(data)
  })

  it('should throw an error if fail when call "unwrap"', () => {
    expect(() => new Result({ err: '' }).unwrap()).toThrow()
  })

  it('should return "data" if success when call "unwrapOr"', () => {
    expect(new Result({ data: 1 }).unwrapOr(2)).toEqual(1)
  })

  it('should return the argument if fail when call "unwrapOr"', () => {
    expect(new Result({ err: '' }).unwrapOr(2)).toEqual(2)
  })

  it('should return "data" if success when call "unwrapOrElse"', () => {
    expect(new Result({ data: 'data' }).unwrapOrElse((err) => err)).toEqual('data')
  })

  it('should return the result of "fn" if fail when call "unwrapOrElse"', () => {
    expect(new Result({ err: 'err' }).unwrapOrElse((err) => err)).toEqual('err')
  })

  it('should return a promise when call "unwrapPromise"', () => {
    new Result({ data: Promise.resolve(1) }).wait().then((res) => {
      expect(res.unwrap()).toEqual(1)
    })
  })

  it('should return "err" if fail when call "error"', () => {
    expect(new Result({ err: 'err' }).error()).toEqual('err')
  })

  it('should return undefined if fail when call "error"', () => {
    expect(new Result({ data: 'data' }).error()).toEqual(undefined)
  })

  it('should return true if fail when call "isErr"', () => {
    expect(new Result({ err: '' }).isErr()).toEqual(true)
  })

  it('should return false if success when call "isErr"', () => {
    expect(new Result({ data: '' }).isErr()).toEqual(false)
  })

  it('should return false if fail when call "isOk"', () => {
    expect(new Result({ err: '' }).isOk()).toEqual(false)
  })

  it('should return true if success when call "isOk"', () => {
    expect(new Result({ data: '' }).isOk()).toEqual(true)
  })

  it('should return a result which is success when call ok', () => {
    expect(ok(1).isOk()).toEqual(true)
    expect(ok().unwrap()).toEqual(undefined)
  })

  it('should return a result which is fail when call err', () => {
    expect(err('').isOk()).toEqual(false)
  })

  it('should return a result whose data is the result of "fn" if success when call "map"', () => {
    expect(new Result({ data: 1 }).map((data) => data + 1).unwrap()).toEqual(2)
  })

  it('should return the same result if fail when call "map"', () => {
    expect(new Result<number>({ err: 'err' }).map((data) => data + 1).error()).toEqual('err')
  })

  it('should a result whose data is the result of "fn" if success when call "mapOr"', () => {
    expect(new Result({ data: 1 }).mapOr((data) => data + 1, 3).unwrap()).toEqual(2)
  })

  it('should return a result whose data is the second argument if fail when call "mapOr"', () => {
    expect(new Result<number>({ err: '' }).mapOr((data) => data + 1, 3).unwrap()).toEqual(3)
  })

  it('should return a result whose data is the result of "fn" if success when call "mapOrElse"', () => {
    expect(
      new Result({ data: 'data' })
        .mapOrElse(
          (data) => data + 'map',
          (err) => err
        )
        .unwrap()
    ).toEqual('datamap')
  })

  it('should return a result whose data is the result of "fn2" if fail when call "mapOrElse"', () => {
    expect(
      new Result<string>({ err: 'err' })
        .mapOrElse(
          (data) => data + 'map',
          (err) => err
        )
        .unwrap()
    ).toEqual('err')
  })

  it('should return "err" if fail when call "mapErr"', () => {
    expect(new Result<number>({ err: 'err' }).mapErr('newErr').error()).toEqual('newErr')
  })

  it('should return the same result if success when call "mapErr"', () => {
    expect(new Result({ data: 1 }).mapErr('newErr')).toEqual(new Result({ data: 1 }))
  })
})
