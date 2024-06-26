import { Timestamp } from 'firebase/firestore'
import type { Models } from 'types/models'
import { z } from 'zod'
import { UserSchema } from './User'

export const ReplySchema = z.object({
  id: z.string(),
  content: z.string(),
  replying_to: z.string(),
  created_by: UserSchema.omit({ id: true }),
  created_date: z.instanceof(Timestamp)
})

export function validateReply (data: unknown): Models.IReply | null {
  try {
    return ReplySchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
