import { z } from 'zod'

export class ReplyValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    content: z.string(),
    created_by: z.string(),
    created_date: z.object({
      seconds: z.number(),
      nanoseconds: z.number()
    }),
    replying_to: z.string()
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
