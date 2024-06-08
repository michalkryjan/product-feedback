import { z } from 'zod'

class CategoryValidator {
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

export { CategoryValidator }
