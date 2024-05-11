import type { DocumentData } from 'firebase/firestore'
import * as Models from 'types/models'

export interface IFeedback extends DocumentData, Omit<Models.IFeedback, 'id'> {}

export interface IStatus extends DocumentData, Omit<Models.IStatus, 'id'> {}

export interface ICategory extends DocumentData, Omit<Models.ICategory, 'id'> {}

export interface IComment extends DocumentData, Omit<Models.IComment, 'id'> {}

export interface IReply extends DocumentData, Omit<Models.IReply, 'id'> {}

export interface IUser extends DocumentData, Omit<Models.IUser, 'id'> {}