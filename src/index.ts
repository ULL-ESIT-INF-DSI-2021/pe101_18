import * as mongoose from 'mongoose';
import {User} from './interface';

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
  name: 'Pedro',
  surname: 'Feliciano',
  age: 80,
  email: 'pedro@gmail.es',
  password: '33333',
});

user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
