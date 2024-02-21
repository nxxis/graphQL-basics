import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Pet } from 'src/pets/schema/pets.schema';
import * as moongoose from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: [{ type: moongoose.Schema.Types.ObjectId, ref: 'Pet' }],
    default: [],
  })
  petID: moongoose.Schema.Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
