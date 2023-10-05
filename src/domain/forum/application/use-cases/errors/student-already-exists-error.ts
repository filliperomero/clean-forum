import { UseCaseError } from '@/core/errors/use-case-error'

export class StudentAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier) {
    super(`Student "${identifier}" already exists`)
  }
}
