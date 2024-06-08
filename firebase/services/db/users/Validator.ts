import { z } from 'zod'

class UserValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    created_date: z.object({
      seconds: z.number(),
      nanoseconds: z.number()
    }),
    image_url: z.string(),
    fullname: z.string(),
    username: z.string()
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

export { UserValidator }
