import { type DocumentData } from 'firebase/firestore'
import * as Models from 'types/data/models'

export interface IFeedback extends DocumentData, Models.IFeedback {}

export interface IStatus extends DocumentData, Models.IStatus {}

export interface ICategory extends DocumentData, Models.ICategory {}

export interface IComment extends DocumentData, Models.IComment {}

export interface IReply extends DocumentData, Models.IReply {}

export interface IUser extends DocumentData, Models.IUser {}