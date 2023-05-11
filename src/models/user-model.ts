import * as Mongoose from 'mongoose'

import * as plugins from '../dbs/plugins'

export const TABLE_NAME = 'users'

export enum Role {
  ADMIN='admin',
  CLIENT='client',
}

export interface IUserDocument extends Mongoose.Document {
  id: Mongoose.ObjectId
  telegramId: string
  role: Role
}

export interface IUser extends IUserDocument { }

export interface IUserModel extends Mongoose.Model<IUser> { }

export type User = Omit<IUserDocument, keyof Mongoose.Document> & { id: string }

const UserSchema = new Mongoose.Schema<IUser, Mongoose.Model<IUser>, IUser, {}, {}, IUserModel>({
  telegramId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: Role.CLIENT,
  }
}, 
{
  collection: TABLE_NAME,
  methods: {} as IUser,
  statics: {} as IUserModel,
})

plugins.schemaVirtuals(UserSchema)

const UserModel: IUserModel = Mongoose.model<IUser, IUserModel>('User', UserSchema);

export default UserModel