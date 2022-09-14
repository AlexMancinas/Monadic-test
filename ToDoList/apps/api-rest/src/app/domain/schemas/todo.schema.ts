import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IToDo } from '@onboarding/domain';
import { Document } from 'mongoose';
export type ToDoDocument = ToDo & Document;

const requiredConfig = { required:true }

@Schema()
export class ToDo implements IToDo {

    @Prop(requiredConfig)
    taskId: string;
    @Prop(requiredConfig)
    title: string;
    @Prop(requiredConfig)
    description: string;
    @Prop(requiredConfig)
    createTime: number;
    @Prop(requiredConfig)
    done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(ToDo);
