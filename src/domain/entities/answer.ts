import { Entity } from "../../core/entities/entity"

interface AnswerProps {
  content: string
  questionId: string
  authorId: string
}

export class Answer extends Entity<AnswerProps> {
  get content() { 
    return this.props.content 
  }
  
  get questionId() { 
    return this.props.questionId 
  }

  get authorId() { 
    return this.props.authorId 
  }
}