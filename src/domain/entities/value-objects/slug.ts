export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and normalize it as a slug
   * 
   * Example: "An example title" => "an-example-title"
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // remove all white spaces
      .replace(/[^\w-]+/g, '') // remove everything that is not considered words
      .replace(/_/g, '-') // replace "_" for "-"
      .replace(/--+/g, '-') // 
      .replace(/-$/g, '') // remove '-' if it is in the end of the string

    return new Slug(slugText)
  }
}