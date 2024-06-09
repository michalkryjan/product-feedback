import { z } from 'zod'

class StatusValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    description: z.string()
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

export { StatusValidator }
