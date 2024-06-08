import { z } from 'zod'

class CommentValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    content: z.string(),
    created_by: z.string(),
    created_date: z.string(),
    replies: z.string().array()
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

export { CommentValidator }
