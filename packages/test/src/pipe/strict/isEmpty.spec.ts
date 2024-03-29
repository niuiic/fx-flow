import { expectType } from '#/utils'
import { isEmpty } from 'fx-flow'

expectType<boolean>(isEmpty([1, 2, 3]))

describe('isEmpty', () => {
  it('should return true if "args" is empty', () => {
    expect(isEmpty(null)).toEqual(true)
    expect(isEmpty(undefined)).toEqual(true)
    expect(isEmpty([])).toEqual(true)
    expect(isEmpty({})).toEqual(true)
    expect(isEmpty('')).toEqual(true)
  })

  it('should return false if "args" is not empty', () => {
    expect(isEmpty(0)).toEqual(false)
    expect(isEmpty(false)).toEqual(false)
    expect(isEmpty(() => {})).toEqual(false)
    expect(isEmpty(Symbol(''))).toEqual(false)
    expect(isEmpty(new Date())).toEqual(false)
  })
})
