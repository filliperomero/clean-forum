import { UniqueEntityID } from "./unique-entity-id"

export class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  protected constructor (props: Props, id?: string) {
    this._id = new UniqueEntityID(id)
    this.props = props
  }

  get id() {
    return this._id
  }
}