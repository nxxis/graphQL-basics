import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false, default: null })
  type: string | null;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
