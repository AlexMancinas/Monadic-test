import { Types, Document } from 'mongoose';
export type TaskClassBind<T> = T & Document<any, any, any> & {
    _id: Types.ObjectId;
}
export type TaskResponse<T> = Promise<T>
export type CollectionTaskResponse<T> = Promise<T[]>
