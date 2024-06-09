import { z } from 'zod'

export class FeedbackValidator {
  private readonly SCHEMA = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    upvotes: z.number(),
    created_by: z.string(),
    created_date: z.object({
      seconds: z.number(),
      nanoseconds: z.number()
    }),
    category: z.string(),
    status: z.string(),
    comments: z.string().array().optional()
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
