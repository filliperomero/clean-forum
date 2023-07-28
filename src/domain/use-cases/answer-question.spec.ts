import { test, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: 'any-id',
    questionId: 'any-id',
    content: 'New Answer'
  })

  expect(answer.content).toEqual('New Answer')
})