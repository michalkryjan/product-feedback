import { z } from 'zod'

export class CategoryValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    name: z.string()
  })

  public validate (data: unknown) {
    try {
      return this.SCHEMA.parse(data)
    } catch (e) {
      console.log(e)

      return null
    }
  }
}
