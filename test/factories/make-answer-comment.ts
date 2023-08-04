import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueEntityID,
) {
  const answercomment = AnswerComment.create(
    {
      answerId: new UniqueEntityID('answer-id'),
      authorId: new UniqueEntityID('author-id'),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answercomment
}
