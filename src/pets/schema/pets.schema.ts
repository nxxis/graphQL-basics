import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Pet {
  @Prop({ required: true })
  @Field()
  name: string;

  @Field()
  @Prop({ required: false, default: null })
  type: string | null;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
