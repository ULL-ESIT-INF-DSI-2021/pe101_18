import 'mocha';
import {expect} from 'chai';
import * as mongoose from 'mongoose';
import {User} from '../src/interface';

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

const user = new User({
  name: 'Juan',
  surname: 'Gonzalez',
  age: 50,
  email: 'juan@gmail.es',
  password: '11111',
});

const sol: string = '{ 
age: 50,
_id: 60a4ddfaf5872f36009a1214,
name: 'Juan',
surname: 'Gonzalez',
email: 'juan@gmail.es',
password: '11111',
__v: 0
}'

describe('add user', () => {
  it('add juan', () => {
    user.save().then((result) => {
      console.log(result);
      expect(result).to.be.equal();
    }).catch((error) => {
      console.log(error);
    }))
});
