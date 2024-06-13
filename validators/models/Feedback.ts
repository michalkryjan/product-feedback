import { DocumentReference, Timestamp } from 'firebase/firestore'
import type { Models } from 'types/models'
import { z } from 'zod'

export const FeedbackSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category_name: z.string(),
  status_name: z.string(),
  upvotes_count: z.number(),
  comments_count: z.number(),
  created_by: z.custom<DocumentReference<Models.IUser | null, Models.IUser>>(
    (val) => {
      return val instanceof DocumentReference && val.path.includes('users')
    },
  ),
  created_date: z.instanceof(Timestamp),
})

export function validateFeedback (data: unknown): Models.IFeedback | null {
  try {
    return FeedbackSchema.parse(data)
  } catch (e) {
    console.log(e)

    return null
  }
}
