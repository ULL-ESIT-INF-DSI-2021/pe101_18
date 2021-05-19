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

User.findOneAndUpdate({email: 'pedro1@', age: 15}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
