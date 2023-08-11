import { vi } from 'vitest'

import { AggregateRoot } from '../entities/aggregate-root'
import { UniqueEntityID } from '../entities/unique-entity-id'
import { DomainEvent } from './domain-event'
import { DomainEvents } from './domain-events'

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date
  private _aggregate: CustomAggregate // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this.ocurredAt = new Date()
    this._aggregate = aggregate
  }

  public getAggregateId(): UniqueEntityID {
    return this._aggregate.id
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null)

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))

    return aggregate
  }
}

describe('Domain Events', () => {
  it('should be able to dispatch and listen to events', () => {
    const callbackSpy = vi.fn()

    // Subscriber registered (we're listening for the "answer created")
    DomainEvents.register(callbackSpy, CustomAggregateCreated.name)

    // Here we're creating an answer WITHOUT saving it in the database
    const aggregate = CustomAggregate.create()

    // Making sure the event was created and was NOT dispatched yet
    expect(aggregate.domainEvents).toHaveLength(1)

    // We're saving the answer in the DB and because of that, we're dispatching the event
    DomainEvents.dispatchEventsForAggregate(aggregate.id)

    // The subscriber listen to the event and do whatever it needs to do with the data
    expect(callbackSpy).toHaveBeenCalled()
    expect(aggregate.domainEvents).toHaveLength(0)
  })
})
