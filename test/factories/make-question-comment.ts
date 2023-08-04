import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  QuestionComment,
  QuestionCommentProps,
} from '@/domain/forum/enterprise/entities/question-comment'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID,
) {
  const questioncomment = QuestionComment.create(
    {
      questionId: new UniqueEntityID('question-id'),
      authorId: new UniqueEntityID('author-id'),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return questioncomment
}
