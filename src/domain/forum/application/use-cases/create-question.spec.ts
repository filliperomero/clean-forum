import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    return undefined
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: 'authorId',
    title: 'Any Title',
    content: 'Any Content',
  })

  expect(question.id).toBeTruthy()
  expect(question.title).toEqual('Any Title')
})
