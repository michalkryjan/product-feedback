import type { Models } from 'types/models'
import { z } from 'zod'

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string()
})

export function validateCategory (data: unknown): Models.ICategory | null {
  try {
    return CategorySchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
