import { Timestamp } from 'firebase/firestore'
import type { Models } from 'types/models'
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  image_url: z.string(),
  fullname: z.string(),
  username: z.string(),
  created_date: z.instanceof(Timestamp)
})

export function validateUser (data: unknown): Models.IUser | null {
  try {
    return UserSchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
