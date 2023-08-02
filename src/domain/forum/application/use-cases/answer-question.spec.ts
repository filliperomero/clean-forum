import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase // sut => System Under Test

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('should be able to answer a question', async () => {
    const { answer } = await sut.execute({
      instructorId: 'any-id',
      questionId: 'any-id',
      content: 'New Answer',
    })

    expect(answer.content).toEqual('New Answer')
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
