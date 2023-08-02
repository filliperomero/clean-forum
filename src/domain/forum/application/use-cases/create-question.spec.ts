import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase // sut => System Under Test

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: 'authorId',
      title: 'Any Title',
      content: 'Any Content',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual('Any Title')
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
