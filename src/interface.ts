import * as mongoose from 'mongoose';
import validator from 'validator';
/**
 * Interfaz que modela la info necesaria por usuario
 */
export interface UserInterface {
    name: string,
    surname: string,
    age?: number,
    email: string,
    password: string
}

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not correct');
      }
    },
  },
  password: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model<UserInterface>('users', UserSchema);
