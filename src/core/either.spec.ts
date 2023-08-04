import { Either, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) return right(10)

  return left('error')
}

describe('Either', () => {
  it('should be able to return true to isRight when it is an success result', () => {
    const result = doSomething(true)

    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })

  it('should be able to return true to isLeft when it is an error result', () => {
    const result = doSomething(false)

    expect(result.isLeft()).toBe(true)
    expect(result.isRight()).toBe(false)
  })
})
