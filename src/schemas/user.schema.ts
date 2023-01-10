import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop(
    raw({
      rua: { type: String },
      bairro: { type: String },
      numero: { type: Number },
      cidade: { type: String },
      estado: { type: String },
    }),
  )
  address: Record<string, any>;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  cpf: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
