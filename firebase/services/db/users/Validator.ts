import { z } from 'zod'

class UserValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    created_date: z.string(),
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
