import { Timestamp } from 'firebase/firestore'
import type { Models } from 'types/models'
import { z } from 'zod'
import { UserSchema } from './User'

export const CommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  created_by: UserSchema,
  created_date: z.instanceof(Timestamp)
})

export function validateComment (data: unknown): Models.IComment | null {
  try {
    return CommentSchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
