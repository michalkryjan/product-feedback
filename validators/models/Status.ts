import type { Models } from 'types/models'
import { z } from 'zod'

export const StatusSchema = z.object({
  id: z.string(),
  order: z.number(),
  name: z.string(),
  description: z.string()
})

export function validateStatus (data: unknown) : Models.IStatus | null {
  try {
    return StatusSchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
